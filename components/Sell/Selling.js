import React from 'react'
import styled from 'react-emotion'
import Autocomplete from 'react-autocomplete'

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

const matchStateToTerm = (state, value) => {
  return state.product_name.toLowerCase().indexOf(value.toLowerCase()) !== -1
}

const Item = ({ id, name, price, handleRemove }) => (
  <tr>
    <th scope="row">{id}</th>
    <td>{name}</td>
    <td>{price}</td>
    <td>
      <input type="number" className="form-control col-3" />
    </td>
    <td>
      <button onClick={handleRemove(id)} className="btn btn-danger">
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
      name: '',
      price: 0
    }
  }

  async componentWillMount() {
    await axios
      .get(`/products`)
      .then(({ data }) => this.setState({ items: data.data }))
      .catch(err => console.log(err))
  }

  handleItem = async () => {
    let storage = await this.state.storage
    storage.push(this.state.value)
    await this.props.handlePrice(this.state.value.price)
    this.setState({
      value: {
        name: '',
        price: 0
      }
    })
  }

  handleRemove = async id => {
    let storage = await this.state.storage
    await storage.splice(id, 0)
    this.setState({
      storage: storage
    })
  }

  render() {
    return (
      <SellingContainer className="col-8">
        <h2>Seller</h2>
        <div className="row">
          <div className="col-10">
            <Autocomplete
              getItemValue={item => {
                this.setState({
                  value: {
                    id: item.product_id,
                    name: item.product_name,
                    price: item.product_price
                  }
                })
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
                {this.state.storage.map(({ id, name, price }, key) => (
                  <Item
                    // id={id}
                    handleRemove={this.handleRemove}
                    key={key}
                    name={name}
                    price={price}
                  />
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </SellingContainer>
    )
  }
}

export default Selling
