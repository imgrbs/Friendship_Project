import React from 'react'
import styled from 'react-emotion'

const Table = styled.table`margin-top: 10px;`

const SellingContainer = styled.div`
  flex: 0 0 71%;
  max-width: 71%;
`

const Selling = props => (
  <SellingContainer className='col-8'>
    <h2>Seller</h2>
    <div className='row'>
      <div className='col-10'>
        <input type='text' className='form-control col-12' />
      </div>
      <div className='col-2'>
        <button className='btn btn-primary col-12'>Add</button>
      </div>
    </div>
    <div className='row'>
      <div className='col-12'>
        <Table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Item Name</th>
              <th scope='col'>Item Price</th>
              <th scope='col'>Item Amount</th>
              <th scope='col'>{null}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>ปลักขิค</td>
              <td>2</td>
              <td>
                <input type='number' className='form-control col-3' />
              </td>
              <td>
                <button className='btn btn-danger'>
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  </SellingContainer>
)

export default Selling
