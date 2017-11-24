import React from 'react'
import { Bar } from 'react-chartjs-2'

import axios from '../../lib/axios'
import { DashboardEnchance } from '../Core/global'

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
    dataQuantity: {}
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

  async componentWillMount() {
    this.fetchQuantity()
    this.fetchSale()
  }

  render() {
    return (
      <DashboardEnchance>
        <h2>Analytics</h2>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Bar height={52.5} width={100} data={this.state.dataSale} />
            </div>
            <div className="col-6">
              <Bar height={52.5} width={100} data={this.state.dataQuantity} />
            </div>
            <div className="col-12">
              <Bar height={25} width={100} data={this.state.dataSale} />
            </div>
          </div>
        </div>
      </DashboardEnchance>
    )
  }
}

export default GraphList
