import React from 'react'
import Form from 'react-jsonschema-form'

import axios from '../../lib/axios'
import schema from './schema.json'
import ui from './ui.json'

const CustomFieldTemplate = props => {
  const {id, classNames, label, required, description, errors, children} = props
  return (
    <div className={classNames}>
      <label htmlFor={id}>
        {id!='root'? label:null}
        {required ? "*" : null}
      </label>
      {description}
      {children}
      {errors}
    </div>
  )
}

const ObjectFieldTemplate = props => {
  return (
    <div className="container" style={{padding: 0}}>
      <h3>{props.title}</h3>
      <div className="row">
        {props.properties.map((element, key) => (
          <div
            key={key}
            className={`${key < 8 ? 'col-12 col-lg-6' : 'col-12'}`}
          >
            {element.content}
          </div>
        ))}
      </div>
    </div>
  )
}

class UserForm extends React.Component {
  state = {}

  handler = props => {
    this.setState({
      ...props.formData
    })
  }

  sended = async () => {
    await axios
      .post(`/users/add`, {
        data: {
          ...this.state
        }
      })
      .then(({ data }) => {
        this.setState({
          username: '',
          password: '',
          firstName: '',
          lastName: '',
          role: '',
          email: '',
          telno: '',
          bossId: 0,
          nationId: '',
          address: '',
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Form
        className='mb-3'
        schema={schema}
        uiSchema={ui}
        FieldTemplate={CustomFieldTemplate}
        ObjectFieldTemplate={ObjectFieldTemplate}
        showErrorList={false}
        onChange={this.handler}
        onSubmit={this.sended}
        formData={this.state}
      >
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <button
              type="submit"
              style={{ width: '99px' }}
              className="btn btn-primary btn-lg mr-3"
            >
              Add
            </button>
            <button
              type="button"
              onClick={this.props.handler}
              style={{ width: '99px' }}
              className="btn btn-secondary btn-lg"
            >
              Close
            </button>
          </div>
        </div>
      </div>
      </Form>
    )
  }
}

export default UserForm
