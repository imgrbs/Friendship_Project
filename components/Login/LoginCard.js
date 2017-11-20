import React from 'react'
import Link from 'next/link'
import styled from 'react-emotion'

import colors from '../Core/colors'

import axios from '../../lib/axios'

const Container = styled.div`color: #666;`

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

  handlerUsername = async props => {
    await this.setState({
      username: props.target.value
    })
  }

  handlerPassword = async props => {
    await this.setState({
      password: props.target.value
    })
  }

  sended = () => {
    axios
      .post(`/login`, {
        data: {
          ...this.state
        }
      })
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  render() {
    let { username, password } = this.state
    return (
      <Card className="card">
        <h4 className="card-title text-center">Login</h4>
        <form className="card-text">
          <div className="form-group">
            <label htmlFor="usr">Username</label>
            <input
              type="text"
              className="form-control"
              id="usr"
              onChange={e => this.handlerUsername(e)}
              value={username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              onChange={e => this.handlerPassword(e)}
              value={password}
            />
          </div>
          <button type="submit" className="col-12 btn btn-primary">
            <span>Login</span>
          </button>
          <RegisterBtn className="col-12 text-center">
            <Link href="/register">
              <a>Register</a>
            </Link>
          </RegisterBtn>
        </form>
      </Card>
    )
  }
}

export default LoginCard
