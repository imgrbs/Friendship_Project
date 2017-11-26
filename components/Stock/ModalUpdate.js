import React from 'react'
import styled from 'react-emotion'
import Form from 'react-jsonschema-form'

import axios from '../../lib/axios'
import colors from '../Core/colors'
import schema from './Update/schema.json'
import ui from './Update/ui.json'

import { FormContainer } from './ModalAdd'
import ModalButton from './ModalButton'

class ModalUpdate extends React.Component {
  state = {  }

  handler = props => {
    this.setState({
      ...props.formData
    })
  }

  sended = async () => {
    let { id } = this.state
    await axios
      .post(`/products/${id}`, {
        data: {
          employee_id: this.props.id,
          ...this.state
        }
      })
      .then(data => {
        this.setState({
          id: 0,
          price: 0,
          amount: 0
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
            text={`Update`}
            handler={this.props.handler}
          />
        </Form>
      </FormContainer>
    )
  }
}

export default ModalUpdate