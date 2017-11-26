import React from 'react'
import styled from 'react-emotion'
import Autocomplete from 'react-autocomplete'

import axios from '../../lib/axios'
import colors from '../Core/colors'
import { InContainer } from '../Core/global'
import Vending from './Vending'

const InContainerStyled = styled(InContainer)`
  flex: 0 0 71%;
  max-width: 71%;
  min-height: 85vh;
`

const List = styled.div`
  margin: 0;
  padding: 7px 10px;
  border: 1px solid #ced4da;
  border-top: none;
  border-bottom: none;
  background: ${props => (props.isHighlighted ? 'lightgray' : 'white')};
`

const Table = styled.table`
  margin-top: 10px;
`

const ErrMsg = () => (
  <div className="col-12 text-center">
    <div className="alert alert-danger">
      <div style={{ color: colors.red }}>Error, Can't add empty item.</div>
    </div>
  </div>
)

const matchStateToTerm = (state, value) => {
  return state.product_name.toLowerCase().indexOf(value.toLowerCase()) !== -1
}

const Item = ({ id, name, price, remove, amount, handleAmount }) => (
  <tr>
    <th scope="row">{id + 1}</th>
    <td>{name}</td>
    <td>{price}</td>
    <td>
      <input
        min="1"
        value={amount}
        onChange={e => handleAmount(id, e.target.value)}
        type="number"
        className="form-control col-4"
      />
    </td>
    <td>
      <button onClick={() => remove(id)} className="btn btn-danger">
        Remove
      </button>
    </td>
  </tr>
)

class Selling extends React.Component {
  state = {
    items: [],
    value: {
      id: '',
      name: '',
      price: 0,
      amount: 1
    },
    dumpValue: {
      id: '',
      name: '',
      price: 0,
      amount: 1
    }
  }

  async componentWillMount() {
    await axios
      .get(`/products`)
      .then(({ data }) => this.setState({ items: data.data }))
      .catch(err => console.log(err))
  }

  handleItem = async () => {
    if (!(this.state.value.name === '')) {
      let storage = await this.props.storage
      storage.push(this.state.value)
      this.props.handleStorage(storage)
      this.props.handlePrice(this.state.value.price)
      this.setState({
        value: {
          id: 0,
          name: '',
          price: 0,
          amount: 1
        }
      })
      this.props.setErr(false)
    } else {
      this.props.setErr(true)
    }
  }

  handleRemove = async id => {
    let storage = await this.props.storage
    let minusPrice = -storage[id].price
    await storage.splice(id, 1)
    this.props.handleStorage(storage)
    this.props.handlePrice(minusPrice)
    this.props.handleRemove(id)
  }

  handleAmount = async (id, value) => {
    let storage = this.props.storage
    storage[id].amount = parseInt(value)
    this.props.handleStorage(storage)
    this.props.handleAmount(id, parseInt(value))
  }

  getItem = val => {
    this.setState({
      dumpValue: val
    })
  }

  render() {
    return (
      <div className="col-12">
        <h5>
          <i className={`fa fa-usd mr-3`} aria-hidden="true" />
          Seller
        </h5>
        <InContainerStyled>
          <div className="row">
            {this.props.err ? <ErrMsg /> : null}
            <div className="col-8 col-lg-9">
              <Autocomplete
                getItemValue={item => {
                  this.getItem(item)
                  return item.product_name
                }}
                items={this.state.items}
                shouldItemRender={matchStateToTerm}
                wrapperStyle={{
                  position: 'relative',
                  display: 'inline-block',
                  width: '100%'
                }}
                inputProps={{ className: 'form-control col-12' }}
                renderInput={props => (
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-search" aria-hidden="true" />
                    </span>
                    <input style={{zIndex: 0}} {...props} />
                  </div>
                )}
                renderMenu={children => <div className="">{children}</div>}
                renderItem={(item, isHighlighted) => (
                  <List key={item.product_id} isHighlighted={isHighlighted}>
                    {item.product_name}
                  </List>
                )}
                value={this.state.value.name}
                onChange={e =>
                  this.setState({ value: { name: e.target.value } })
                }
                onSelect={async () => {
                  let { dumpValue } = this.state
                  await this.setState({
                    value: {
                      id: dumpValue.product_id,
                      name: dumpValue.product_name,
                      price: dumpValue.product_price,
                      amount: 1
                    }
                  })
                }}
              />
            </div>
            <div className="col-4 col-lg-3">
              <button
                onClick={this.handleItem}
                className="btn btn-primary col-12"
              >
                <i class="fa fa-plus-circle mr-2" aria-hidden="true" />
                Add
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                    <th scope="col">Item Amount</th>
                    <th scope="col">{null}</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.storage.map(
                    ({ id, name, price, amount }, key) => {
                      return (
                        <Item
                          key={key}
                          id={key}
                          handleAmount={this.handleAmount}
                          amount={amount}
                          name={name}
                          price={price}
                          remove={this.handleRemove}
                        />
                      )
                    }
                  )}
                </tbody>
              </Table>
            </div>
          </div>
        </InContainerStyled>
      </div>
    )
  }
}

export default Selling
