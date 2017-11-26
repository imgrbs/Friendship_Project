import React from 'react'
import ReactTable from 'react-table'

import ModalAdd from './ModalAdd'
import ModalUpdate from './ModalUpdate'

import axios from '../../lib/axios'
import { DashboardEnchance, InContainer } from '../Core/global'

class StockList extends React.Component {
  state = {
    data: [],
    modalAdd: false,
    modalUpdate: false
  }

  handlerDelete = async id => {
    await axios
      .delete(`/products/${id}`)
      .then(data => {
        this.fetchData()
      })
      .catch(err => console.log(err))
  }

  setAdd = () => {
    this.setState({
      modalAdd: !this.state.modalAdd
    })
    this.fetchData()
  }

  setUpdate = () => {
    this.setState({
      modalUpdate: !this.state.modalUpdate
    })
    this.fetchData()
  }

  fetchData = async () => {
    await axios
      .get(`/products/categories`)
      .then( async ({ data }) => {
        let val = []
        await data.data[0].map((data, key) => {
          val[key] = {
            ...data,
            created_at: new Date(data.created_at).toString(),
            updated_at: new Date(data.updated_at).toString()
          }
          this.setState({
            data: val
          })
        })
      })
      .catch(err => console.log(err))
  }

  async componentWillMount() {
    this.fetchData()
  }

  render() {
    return (
      <DashboardEnchance>
        <div className="row">
          <div className="mb-3 col-12 d-flex flex-row align-items-center">
            <h5 className="mr-auto mb-0">
              <i className="fa fa-archive ml-2 mr-3" aria-hidden="true" />
              Stock
            </h5>
            <button
              onClick={this.setAdd}
              className="btn btn-outline-primary mr-2 "
            >
              <i className="fa fa-plus-circle mr-2" aria-hidden="true" />
              Add Item
            </button>
            <button
              onClick={this.setUpdate}
              className="btn btn-outline-warning "
            >
              <i className="fa fa-pencil-square-o mr-2" aria-hidden="true"></i>
              Update Item
            </button>
          </div>
        </div>
        <InContainer>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ReactTable
                  filterable={!false}
                  minRows={7}
                  defaultPageSize={7}
                  data={this.state.data}
                  columns={[
                    { Header: 'Item ID', accessor: 'product_id' },
                    { Header: 'Item Name', accessor: 'product_name' },
                    { Header: 'Item Price', accessor: 'product_price' },
                    { Header: 'Item Amount', accessor: 'product_amount' },
                    { Header: 'Item Type', accessor: 'category_name' },
                    { Header: 'Created Date', accessor: 'created_at' },
                    { Header: 'Updated Date', accessor: 'updated_at' },
                    {
                      Header: 'Delete',
                      accessor: 'product_id',
                      Cell: ({ value }) => (
                        <button
                          onClick={() => this.handlerDelete(value)}
                          className="btn btn-danger col-12"
                        >
                          DELETE
                        </button>
                      )
                    }
                  ]}
                />
              </div>
            </div>
          </div>
          <ModalAdd open={this.state.modalAdd} handler={this.setAdd} />
          <ModalUpdate id={this.props.user.id} open={this.state.modalUpdate} handler={this.setUpdate} />
        </InContainer>
      </DashboardEnchance>
    )
  }
}

export default StockList
