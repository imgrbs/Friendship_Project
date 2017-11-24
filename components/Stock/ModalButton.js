import React from 'react'

const ModalButton = ({ sended , text, handler }) => (
  <div className='container'>
    <div className='row'>
      <div className='col-12 d-flex align-items-center justify-content-center'>
        <button
          style={{ width: '99px' }}
          onClick={sended}
          className='btn btn-primary btn-lg mr-3'
        >
          {text}
        </button>
        <button onClick={handler} className='btn btn-danger btn-lg'>
          Cancel
        </button>
      </div>
    </div>
  </div>
)

export default ModalButton
