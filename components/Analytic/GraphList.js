import React from 'react'
import { Bar } from 'react-chartjs-2'

import axios from '../../lib/axios'
import { DashboardEnchance, InContainer } from '../Core/global'
import TransactionTable from './TransactionTable'

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
    transaction: []
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
    let {user: {id}} = this.props
    let transaction = []
    await axios.get(`/transactions/${id}`)
    .then(async ({data}) => {
      await data.data[0].map( (data,key) => {
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

  async componentWillMount() {
    this.fetchQuantity()
    this.fetchSale()
    this.fetchTransaction()
  }

  render() {
    return <DashboardEnchance>
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
              <div className="col-12">
                <h5>
                  <i className={`fa fa-tags mr-3`} aria-hidden="true" />
                  Your Transaction
                </h5>
                <InContainer>
                  <TransactionTable data={this.state.transaction} />
                </InContainer>
              </div>
            </div>
          </div>
      </DashboardEnchance>
  }
}

export default GraphList
