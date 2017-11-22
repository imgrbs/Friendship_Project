import React from 'react'
import styled from 'react-emotion'

const Card = styled.div`height: 100%;`

const VendingContainer = styled.div`
  position: fixed;
  right: 0;
  height: 75%;
`

const Vending = ({ sellerName, totalItems, totalPrices }) => (
  <VendingContainer className='col-3'>
    <h1>Vending</h1>
    <Card className='card'>
      <div className='card-body col-12 d-flex flex-column align-items-start'>
        <h4 className='card-title'>Seller : {sellerName}</h4>
        <div className='list-group mb-auto col-12'>
          <button
            type='button'
            className='list-group-item list-group-item-action active'
          >
            Total Items : {totalItems}
          </button>
          <button
            type='button'
            className='list-group-item list-group-item-action'
          >
            Total Prices : {totalPrices}
          </button>
        </div>
        <div className='container'>
          <div className='row justify-content-center'>
            <a href='#' className='btn btn-primary col-6'>
              Buy
            </a>
            <a href='#' className='btn btn-outline-secondary col-6'>
              Reset
            </a>
          </div>
        </div>
      </div>
    </Card>
  </VendingContainer>
)

export default Vending
