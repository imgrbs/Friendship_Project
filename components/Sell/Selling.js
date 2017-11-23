import React from 'react'
import styled from 'react-emotion'
import Autocomplete from 'react-autocomplete'

import colors from '../Core/colors'
import Vending from './Vending'
import axios from '../../lib/axios'

const List = styled.div`
  margin: 0;
  padding: 7px 10px;
  border: 1px solid #ced4da;
  border-top: none;
  border-bottom: none;
  background: ${props => (props.isHighlighted ? 'lightgray' : 'white')};
`

const Table = styled.table`margin-top: 10px;`

const SellingContainer = styled.div`
  flex: 0 0 71%;
  max-width: 71%;
`

const ErrMsg = () => (
  <div className="col-12 text-center">
    <div className="alert alert-danger">
      <div style={{color: colors.red}}>Error, Can't add empty item.</div>
    </div>
  </div>
)

const matchStateToTerm = (state, value) => {
  return state.product_name.toLowerCase().indexOf(value.toLowerCase()) !== -1
}

const Item = ({ id, name, price, remove, value, amount }) => (
  <tr>
    <th scope="row">{id+1}</th>
    <td>{name}</td>
    <td>{price}</td>
    <td>
      <input min='1' onChange={e => amount(id, e.target.value)} type="number" className="form-control col-3" />
    </td>
    <td>
      <button onClick={()=>remove(id)} className="btn btn-danger">
        Remove
      </button>
    </td>
  </tr>
)

class Selling extends React.Component {
  state = {
    items: [],
    storage: [],
    value: {
      id: '',
      name: '',
      price: 0,
    },
    dumpValue: {
      id: '',
      name: '',
      price: 0,
    },
    err: false
  }

  async componentWillMount() {
    await axios
      .get(`/products`)
      .then(({ data }) => this.setState({ items: data.data }))
      .catch(err => console.log(err))
  }

  handleItem = async () => {
    if (!(this.state.value.name === '')) {
      let storage = await this.state.storage
      storage.push(this.state.value)
      this.props.handlePrice(this.state.value.price)
      this.setState({
        value: {
          id: 0,
          name: '',
          price: 0
        }
      })
      this.setState({
        err: false
      })
    } else {
      this.setState({
        err: true
      })
    }
  }

  handleRemove = async id => {
    let storage = await this.state.storage
    let minusPrice = -storage[id].price
    await storage.splice(id, 1)
    this.props.handlePrice(minusPrice)
    this.props.handleRemove(id)
    this.setState({
      storage: storage
    })
  }

  handleAmount = (id, value) => {
    this.props.handleAmount(id, parseInt(value))
  }

  getItem = (val) => {
    this.setState({
      dumpValue: val
    })
  }

  render() {
    return (
      <SellingContainer className="col-8">
        <h2>Seller</h2>
        <div className="row">
          { this.state.err ? 
            (<ErrMsg />)
            : (null)
          }
          <div className="col-10">
            {this.state.amount}
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
              renderMenu={children => <div className="">{children}</div>}
              renderItem={(item, isHighlighted) => (
                <List key={item.product_id} isHighlighted={isHighlighted}>
                  {item.product_name}
                </List>
              )}
              value={this.state.value.name}
              onChange={(e) => this.setState({value:{name:e.target.value}})}
              onSelect={
                async () => { 
                  let {dumpValue} = this.state
                  await this.setState({
                    value: {
                      id: dumpValue.product_id,
                      name: dumpValue.product_name,
                      price: dumpValue.product_price,
                    }
                  })
                }
              }
            />
          </div>
          <div className="col-2">
            <button
              onClick={this.handleItem}
              className="btn btn-primary col-12"
            >
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
                {this.state.storage.map(({ id, name, price }, key) => {
                  return <Item
                    id={key}
                    amount={this.handleAmount}
                    value={this.state.amount}
                    key={key}
                    name={name}
                    price={price}
                    remove={this.handleRemove}
                  />
                }
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </SellingContainer>
    )
  }
}

export default Selling
