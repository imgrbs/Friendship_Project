import React from 'react'
import styled from 'react-emotion'

const Card = styled.div`
  height: 100%;
`

const VendingContainer = styled.div`
  position: fixed;
  right: 0;
  height: 75%;
`

const Vending = ({ sellerName, totalAmounts, totalPrices }) => (
  <VendingContainer className='animated slideInRight col-3'>
    <h1>Vending</h1>
    <Card className='card'>
      <div className='card-body col-12 d-flex flex-column align-items-start'>
        <h4 className='card-title'>Seller : {sellerName}</h4>
        <div className='container-fluid'>
          <div className='row'>
            <div className='list-group mb-auto col-12'>
              <button
                type='button'
                className='list-group-item list-group-item-action active'
              >
                Total Items : {totalAmounts}
              </button>
              <button
                type='button'
                className='list-group-item list-group-item-action'
              >
                Total Prices : {totalPrices}
              </button>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            <div className='btn-group col-12'>
              <button href='#' className='btn btn-primary col-6'>
                Buy
              </button>
              <button href='#' className='btn btn-outline-secondary col-6'>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </VendingContainer>
)

export default Vending
