import React from 'react'
import styled from 'react-emotion'

import colors from '../Core/colors'
import axios from '../../lib/axios'
import { DashboardEnchance, InContainer } from '../Core/global'

import LastTransaction from './LastTansaction'

const CardStyled = styled.div`
  border-radius: 0;
  margin-bottom: 24px;
  padding: 15px 32px;
  background-color: #fff;
  border-radius: 2px;
  font-size: 12px;
  position: relative;
  transition: all 0.3s;
  border-color: rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
  }
`

const Card = ({ color, icon, head, value, text }) => (
  <div className="btn animated fadeInUp col-12 col-lg-4 text-center">
    <CardStyled className={`card mb-3`}>
      <div className="row">
        <div className="col-12 col-lg-3 d-flex justify-content-center align-items-center">
          <h1 style={{ color: color }}>
            <i className={`fa ${icon}`} aria-hidden="true" />
          </h1>
        </div>
        <div className="col-12 col-lg-9 text-center">
          <div className={`card-body`}>
            <h6 className="card-title">{head}</h6>
            <h3 className="card-text">{value}</h3>
            <h6 style={{fontSize:'0.9rem'}}>{text}</h6>
          </div>
        </div>
      </div>
    </CardStyled>
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
    this.fetchLastTransaction()
    this.fetchTotalAmount()
    this.fetchTotalSale()
    this.fetchTopSale()
  }

  render() {
    return <DashboardEnchance>
        <h5>
          <i className={`fa fa-tv mr-3`} aria-hidden="true" />
          Overview
        </h5>
        <section className="row text-center placeholders mb-3">
          <Card color={colors.green} icon={'fa-shopping-basket'} head={`Total Amounts`} value={this.state.totalAmounts} text={`Items`} />
          <Card color={colors.blue} icon={'fa-money'} head={`Total Sales`} value={this.state.totalSales} text={`Bath`} />
          <Card color={colors.red} icon={'fa-star'} head={`Best Sellter`} value={this.state.mostItem} text={`${this.state.date}`} />
        </section>

        <h5 className="d-flex">
          <i className="fa fa-bookmark ml-2 mr-3" aria-hidden="true" />
          Lasted Transaction
          <span className="ml-3 mr-auto badge badge-success">New</span>
          <span onClick={this.fetchLastTransaction} className="btn badge badge-warning text-white">
            Reload
          </span>
        </h5>
        <InContainer>
          <LastTransaction lastTransaction={this.state.lastTransaction} />
        </InContainer>
      </DashboardEnchance>
  }
}

export default Block
