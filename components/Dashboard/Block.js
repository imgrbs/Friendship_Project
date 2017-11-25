import React from 'react'

import axios from '../../lib/axios'
import { DashboardEnchance } from '../Core/global'

import LastTransaction from './LastTansaction'

const Card = ({ styled, head, value, text }) => (
  <div className="animated fadeInUp col-4 text-center">
    <div className={`card border-${styled} mb-3`}>
      <div className={`card-body bg-${styled} text-white`}>
        <h4 className="card-title">{head}</h4>
        <h1 className="card-text">{value}</h1>
        <h5>{text}</h5>
      </div>
    </div>
  </div>
)

class Block extends React.Component {
  state = {
    lastTransaction: [],
    totalAmounts: 0,
    totalSales: 0,
    mostItem: 'default',
    date: ''
  }

  fetchLastTransaction = async () => {
    await axios
      .get('/transactions/top')
      .then(({ data }) =>
        this.setState({
          lastTransaction: data.data[0]
        })
      )
      .catch(err => console.log(err))
  }

  fetchTotalAmount = async () => {
    await axios
      .get('/products/total')
      .then(({ data }) =>
        this.setState({
          totalAmounts: data.data[0][0].Total
        })
      )
      .catch(err => console.log(err))
  }

  fetchTotalSale = async () => {
    await axios
      .get('/bills/total')
      .then(({ data }) =>
        this.setState({
          totalSales: data.data[0][0].Total
        })
      )
      .catch(err => console.log(err))
  }

  fetchTopSale = async () => {
    await axios
      .get('/products/topsale')
      .then(({ data }) =>
        this.setState({
          mostItem: data.data[0][0].product_name,
          date: new Date(data.data[0][0].Date).toDateString()
        })
      )
      .catch(err => console.log(err))
  }

  async componentWillMount() {
    console.log('get props ', this.props)
    this.fetchLastTransaction()
    this.fetchTotalAmount()
    this.fetchTotalSale()
    this.fetchTopSale()
  }

  render() {
    return (
      <DashboardEnchance>
        <h2>Overview</h2>
        <section className="row text-center placeholders mb-3">
          <Card
            styled={'success'}
            head={`Total Amounts`}
            value={this.state.totalAmounts}
            text={`Items`}
          />
          <Card
            styled={'primary'}
            head={`Total Sales`}
            value={this.state.totalSales}
            text={`Bath`}
          />
          <Card
            styled={'danger'}
            head={`Best Sellter`}
            value={this.state.mostItem}
            text={`Date : ${this.state.date}`}
          />
        </section>

        <h2 className="d-flex">
          Lasted Transaction
          <span className="ml-3 mr-auto badge badge-success">New</span>
          <span
            onClick={this.fetchLastTransaction}
            className="btn badge badge-warning"
          >
            Reload
          </span>
        </h2>
        <LastTransaction lastTransaction={this.state.lastTransaction} />
      </DashboardEnchance>
    )
  }
}

export default Block
