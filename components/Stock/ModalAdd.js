import React from 'react'
import styled from 'react-emotion'
import Form from 'react-jsonschema-form'

import axios from '../../lib/axios'
import colors from '../Core/colors'
import schema from './Add/schema.json'
import ui from './Add/ui.json'

import ModalButton from './ModalButton'
export const FormContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 105%;
  padding: 3.2em 2em;
  background-color: ${colors.modalBackground};
  display: ${props => props.open ? 'block': 'none'};
`

class ModalAdd extends React.Component {
  state = {

  }

  handler = props => {
    this.setState({
      ...props.formData
    })
  }

  sended = async () => {
    await axios
      .post(`/products`, {
        data: {
          ...this.state
        }
      })
      .then(data => {
        console.log(data)
        this.setState({
          name: '',
          price: 0,
          amount: 0,
          categories: 0,
          err: ''
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <FormContainer className='animated fadeIn' open={this.props.open}>
        <Form
          schema={schema}
          uiSchema={ui}
          showErrorList={false}
          onChange={this.handler}
          onSubmit={this.sended}
          formData={this.state}
          >
          <ModalButton
            sended={this.sended}
            text={`Add`}
            handler={this.props.handler}
          />
        </Form>
      </FormContainer>
    )
  }
}

export default ModalAdd
