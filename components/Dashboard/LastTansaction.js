import React from 'react'

class LastTransaction extends React.Component {
  render () {
    return (
      <div className='row animated fadeInUp'>
        <div className='col-12'>
          <div className='table-responsive'>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Bill ID</th>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.lastTransaction.map((val, key) => (
                    <tr key={key}>
                      <td>{val.transaction_id}</td>
                      <td>{val.bill_id}</td>
                      <td>{val.product_id}</td>
                      <td>{val.product_name}</td>
                      <td>{val.quantity}</td>
                      <td>{new Date(val.created_at).toString()}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default LastTransaction
