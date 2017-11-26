import React from 'react'
import styled from 'react-emotion'
import Autocomplete from 'react-autocomplete'
import { Bar } from 'react-chartjs-2'

import axios from '../../lib/axios'
import { DashboardEnchance, InContainer } from '../Core/global'
import TransactionTable from './TransactionTable'
import TotalProducts from './TotalProducts'
import Categories from './Categories'

const Nav = styled.nav`
  box-shadow: none;
`

const List = styled.div`
  cursor: pointer;
  margin: 0;
  padding: 7px 10px;
  border: 1px solid #ced4da;
  border-top: none;
  border-bottom: none;
  background: ${props => (props.isHighlighted ? 'lightgray' : 'white')};
`

const Button = styled.button``

const CategoryButton = ({
  setCategoryName,
  isHighlighted,
  name,
  handler,
  id
}) => (
  <List
    isHighlighted={isHighlighted}
    onClick={() => {
      handler(id)
      setCategoryName(name)
    }}
  >
    {name}
  </List>
)

const style = {
  backgroundColor: [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
  ],
  borderColor: [
    'rgba(255,99,132,1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
  ],
  borderWidth: 1
}

class GraphList extends React.Component {
  state = {
    dataSale: {},
    dataQuantity: {},
    transaction: [],
    totalProducts: [],
    categories: [],
    employeeSales: [],
    categoryName: 'เครื่องใช้ไฟฟ้า'
  }

  fetchSale = async () => {
    let name = []
    let sales = []
    await axios.get('/products/totalsale').then(({ data: { data } }) => {
      data[0].map((val, key) => {
        name[key] = val.name
        sales[key] = val.totalSale
      })
      this.setState({
        dataSale: {
          labels: name,
          datasets: [
            {
              label: 'Total Sale',
              data: sales,
              ...style
            }
          ]
        }
      })
    })
  }

  fetchQuantity = async () => {
    let name = []
    let sales = []
    await axios.get('/products/totalquantity').then(({ data: { data } }) => {
      data[0].map((val, key) => {
        name[key] = val.name
        sales[key] = val.totalQuantity
      })
      this.setState({
        dataQuantity: {
          labels: name,
          datasets: [
            {
              label: 'Total Quantity',
              data: sales,
              ...style
            }
          ]
        }
      })
    })
  }

  fetchTransaction = async () => {
    let { user: { id } } = this.props
    let transaction = []
    await axios.get(`/transactions/${id}`).then(async ({ data }) => {
      await data.data[0].map((data, key) => {
        transaction[key] = {
          ...data,
          created_at: new Date(data.created_at).toDateString(),
          updated_at: new Date(data.updated_at).toDateString()
        }
      })
      this.setState({
        transaction: transaction
      })
    })
  }

  fetchTotalProducts = async () => {
    await axios
      .get(`/products/transactions`)
      .then(({ data }) => {
        this.setState({
          totalProducts: data.data[0]
        })
      })
      .catch(err => console.log(err))
  }

  setCategoryName = async name => {
    this.setState({
      categoryName: name
    })
  }

  fetchCategories = async () => {
    await axios
      .get(`/categories`)
      .then(({ data }) => {
        this.setState({
          categories: data.data
        })
      })
      .catch(err => console.log(err))
  }

  fetchByCategories = async id => {
    await axios
      .post(`/users/categories`, {
        data: {
          id: id
        }
      })
      .then(({ data }) => {
        this.setState({
          employeeSales: data.data[0]
        })
      })
      .catch(err => console.log(err))
  }

  async componentWillMount() {
    this.fetchQuantity()
    this.fetchSale()
    this.fetchTransaction()
    this.fetchTotalProducts()
    this.fetchCategories()
    this.fetchByCategories(1)
  }

  render() {
    return (
      <DashboardEnchance>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5>
                <i className={`fa fa-area-chart mr-3`} aria-hidden="true" />
                Analytic
              </h5>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6 mb-3">
              <InContainer>
                <Bar height={45} width={100} data={this.state.dataSale} />
              </InContainer>
            </div>
            <div className="col-6 mb-3">
              <InContainer>
                <Bar height={45} width={100} data={this.state.dataQuantity} />
              </InContainer>
            </div>
            <div className="col-12 mb-3">
              <h5>
                <i className={`fa fa-sticky-note mr-3`} aria-hidden="true" />
                Your Transaction
              </h5>
              <InContainer>
                <TransactionTable data={this.state.transaction} />
              </InContainer>
            </div>
            <div className="col-12 md-3">
              <h5>
                <i className={`fa fa-tags mr-3`} aria-hidden="true" />
                Total Information of Products
              </h5>
              <InContainer>
                <TotalProducts data={this.state.totalProducts} />
              </InContainer>
            </div>
            <div className="col-12 mt-3 md-3">
              <h5>
                <i className={`fa fa-flag mr-3`} aria-hidden="true" />
                Total Sales of Category
              </h5>
              <InContainer style={{ display: 'flex', flexDirection: 'column' }}>
                <Autocomplete
                  readonly
                  inputProps={{
                    className: 'ml-auto pointer form-control col-12'
                  }}
                  getItemValue={item => item.category_name}
                  items={this.state.categories}
                  renderInput={props => (
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="fa fa-search" aria-hidden="true" />
                      </span>
                      <input {...props} readOnly />
                    </div>
                  )}
                  renderMenu={children => <div>{children}</div>}
                  renderItem={(item, isHighlighted) => (
                    <div key={item.category_id}>
                      <CategoryButton
                        setCategoryName={this.setCategoryName}
                        handler={this.fetchByCategories}
                        id={item.category_id}
                        isHighlighted={isHighlighted}
                        name={item.category_name}
                      />
                    </div>
                  )}
                  value={this.state.categoryName}
                />
                <Categories
                  data={this.state.employeeSales}
                  categories={this.state.categories}
                />
              </InContainer>
            </div>
          </div>
        </div>
      </DashboardEnchance>
    )
  }
}

export default GraphList
