import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import styled from 'react-emotion'
import Form from 'react-jsonschema-form'

import colors from '../Core/colors'
import axios from '../../lib/axios'

import schema from './schema.json'
import ui from './ui.json'

const Card = styled.div`
  width: 20rem;
  border: 1px solid ${colors.background};
  background-color: ${colors.background};
  padding: 36px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.08);
`

const RegisterBtn = styled.div`margin-top: 0.5em;`

class LoginCard extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handler = props => {
    this.setState({
      ...props.formData
    })
  }

  sended = async () => {
    await axios
      .post(`/login`, {
        data: {
          ...this.state
        }
      })
      .then(data => {
        Router.push('/dashboard')
      })
      .catch(err => console.log(err))
  }

  render() {
    let { username, password } = this.state
    return (
      <Card className="card">
        <Form
          method="post"
          schema={schema}
          uiSchema={ui}
          // ObjectFieldTemplate={ObjectFieldTemplate}
          // FieldTemplate={CustomFieldTemplate}
          showErrorList={false}
          onChange={this.handler}
          onSubmit={this.sended}
          formData={this.state}
        >
          <button type="submit" className="col-12 btn btn-primary">
            <span>Login</span>
          </button>
          <RegisterBtn className="col-12 text-center">
            <Link href="/register">
              <a>Register</a>
            </Link>
          </RegisterBtn>
        </Form>
      </Card>
    )
  }
}

export default LoginCard
