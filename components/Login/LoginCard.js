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

const ErrorMsg = styled.div`
  color: ${colors.red};
  font-size: 0.9em;
  text-align: center;
  margin: -15px 0 15px;
`

class LoginCard extends React.Component {
  state = {
    err: '',
    loading: false
  }

  handler = props => {
    this.setState({
      ...props.formData,
      err: ''
    })
  }

  sended = async () => {
    await this.setState({
      loading: !this.state.loading
    })
    await axios
      .post(`/login`, {
        data: {
          ...this.state
        }
      })
      .then(({ data }) => {
        if (data.status) {
          window.location.pathname = '/dashboard'
        } else {
          this.setState({
            err: 'username or password incorrect!',
            loading: !this.state.loading
          })
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Card className="card animated fadeInUp">
        <Form
          method="post"
          schema={schema}
          uiSchema={ui}
          showErrorList={false}
          onChange={this.handler}
          onSubmit={this.sended}
          formData={this.state}
        >
          <ErrorMsg>{`${this.state.err ? this.state.err : ''}`}</ErrorMsg>
          <button
            type="submit"
            className={`col-12 btn btn-primary ${this.state.loading
              ? 'disabled'
              : ''}`}
          >
            {
              !this.state.loading
              ? ( <span>Login</span>)
              : (<i className="fa fa-circle-o-notch fa-spin" />)
            }
          </button>
        </Form>
      </Card>
    )
  }
}

export default LoginCard
