import React from 'react'
import ReactTable from 'react-table'

import ModalAdd from './ModalAdd'
import ModalUpdate from './ModalUpdate'

import axios from '../../lib/axios'
import { DashboardEnchance } from '../Core/global'

class StockList extends React.Component {
  state = {
    data: [],
    modalAdd: false,
    modalUpdate: false
  }

  handlerDelete = async id => {
    console.log(id)
    await axios
      .delete(`/products/${id}`)
      .then(data => {
        this.fetchData()
        console.log(data)
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
      .then(({ data }) => this.setState({ data: data.data }))
      .catch(err => console.log(err))
  }

  async componentWillMount() {
    await axios
      .get(`/products/categories`)
      .then(({ data }) => this.setState({ data: data.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <DashboardEnchance>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-row align-items-center">
              <h2 className="mr-auto">Stock</h2>
              <button onClick={this.setAdd} className="btn btn-success mr-2 ">
                Add Item
              </button>
              <button onClick={this.setUpdate} className="btn btn-primary ">
                Update Item
              </button>
            </div>
            <div className="col-12">
              <ReactTable
                filterable={!false}
                minRows={8}
                defaultPageSize={8}
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
        <ModalUpdate open={this.state.modalUpdate} handler={this.setUpdate} />
      </DashboardEnchance>
    )
  }
}

export default StockList
