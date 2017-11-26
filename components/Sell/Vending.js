import React from 'react'
import styled from 'react-emotion'

import colors from '../Core/colors'
import axios from '../../lib/axios'

const Card = styled.div`
  min-height: 60vh;
  border: 0px;
  background: #fff;
  border-radius: 2px;
  font-size: 12px;
  position: relative;
  transition: all 0.3s;

  &:hover {
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
  }
`

const VendingContainer = styled.div`
  position: fixed;
  margin-top: 2em;
  right: 0;
  height: 75%;
`
 
const ModalContainer = styled.div`
  display: ${props => (props.check ? 'flex' : 'none')};
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.modalBackground};
  z-index: 9999;
  left: -260%;
  top: -10%;
`

const Modal = styled.div`
  display: ${props => (props.check ? 'block' : 'none')};
  width: 600px;
  height: 500px;
  left: -170%;
`

const Result = ({ check, handleResult, handleBackground }) => (
  <Modal check={check} className="modal animated fadeInUp">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title mr-auto">Result</h4>
          <button
            onClick={handleResult}
            type="button"
            className="close"
            data-dismiss="modal"
          >
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>Sell, Complete</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-success"
            data-dismiss="modal"
            onClick={handleBackground}
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  </Modal>
)

const Alert = ({
  background,
  check,
  result,
  handleClick,
  handleResult,
  handleBackground,
  handleAccept
}) => (
  <ModalContainer check={background} className="animated fadeIn">
    <Modal check={check} className="modal animated fadeInUp">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title mr-auto">Confirm</h4>
            <button
              onClick={handleClick}
              type="button"
              className="close"
              data-dismiss="modal"
            >
              &times;
            </button>
          </div>
          <div className="modal-body">
            <p>Confirm, Selling</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className={`btn btn-success ${result ? 'disabled': ''}`}
              data-dismiss="modal"
              onClick={handleAccept}
            >
              {!result ? (
                'Accept'
              ) : (
                <i className="fa fa-circle-o-notch fa-spin" />
              )}
            </button>
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
              onClick={handleClick}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
    <Result
      check={result}
      handleResult={handleResult}
      handleBackground={handleBackground}
    />
  </ModalContainer>
)

class Vending extends React.Component {
  state = {
    check: false,
    result: false,
    background: false
  }

  setModal = async () => {
    if(this.props.totalAmounts > 0) {
      this.setState({
        check: !this.state.check,
        background: !this.state.background
      })
      this.props.setErr(false)
    } else {
      this.props.setErr(true)
    }
  }
  
  setResult = async () => {
    this.props.clearStorage()
    this.setState({
      result: !this.state.result
    })
    setTimeout(() => {
      this.setState({
        check: !this.state.check
      })
    }, 300);
  }
  
  setBackground = () => {
    this.setState({
      result: !this.state.result,
      background: !this.state.background
    })
  }
  
  handleAccept = async data => {
    let storage = await {
      employee_id: +localStorage.getItem('id'),
      ...this.props
    }
    axios.post('/buy',{
      data: storage
    })
      .then(data => this.setResult())
      .catch(err => console.log(err))
  }

  render() {
    let { sellerName, totalAmounts, totalPrices } = this.props
    return <VendingContainer className="animated slideInRight col-4 col-lg-3">
        <Card className="card">
          <div className="container mt-4">
            <div className="row">
              <div className="col-12 text-center">
                <h3>
                  <i class="fa fa-user-circle mr-3" aria-hidden="true" />
                  Vending
                </h3>
              </div>
            </div>
          </div>
          <div className="card-body col-12 d-flex flex-column align-items-start">
            <h6>Seller Name</h6>
            <h4>{sellerName}</h4>
            <div className="container-fluid mb-auto">
              <div className="row align-items-center justify-content-center">
                <div className="list-group mb-auto col-12">
                  <button type="button" className="list-group-item list-group-item-action">
                    Total Items : {totalAmounts}
                  </button>
                  <button type="button" className="list-group-item list-group-item-action">
                    Total Prices : {totalPrices}
                  </button>
                </div>
              </div>
            </div>
            <div className="container-fluid mb-2">
              <div className="row justify-content-center">
                <div className="btn-group col-12" style={{ padding: 0 }}>
                  <button onClick={this.setModal} className="btn btn-primary col-6">
                    Buy
                  </button>
                  <button onClick={this.props.clearStorage} className="btn btn-outline-secondary col-6">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <Alert result={this.state.result} check={this.state.check} background={this.state.background} handleClick={this.setModal} handleResult={this.setResult} handleBackground={this.setBackground} handleAccept={this.handleAccept} />
      </VendingContainer>
  }
}

export default Vending
