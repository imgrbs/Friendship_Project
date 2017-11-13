import React from 'react'
import Link from 'next/link'
import styled from 'react-emotion'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
`

const Card = styled.div`
  width: 20rem;
  border: 1px solid #f8f8f8;
  background-color: #f8f8f8;
  padding: 36px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.08);
`

const RegisterBtn = styled.div`margin-top: .5em;`

const LoginCard = () => (
  <Container className='container'>
    <div className='row d-flex justify-content-center align-items-center'>
      <Card className='card'>
        <h4 className='card-title text-center'>Login</h4>
        <form className='card-text'>
          <div className='form-group'>
            <label htmlFor='usr'>Username</label>
            <input type='text' className='form-control' id='usr' />
          </div>
          <div className='form-group'>
            <label htmlFor='pwd'>Password</label>
            <input type='password' className='form-control' id='pwd' />
          </div>
          <Link href='/dashboard'>
            <button type='submit' className='col-12 btn btn-primary'>
              <span>Login</span>
            </button>
          </Link>
          <RegisterBtn className='col-12 text-center'>
            <Link href='/register'>
              <a>Register</a>
            </Link>
          </RegisterBtn>
        </form>
      </Card>
    </div>
  </Container>
)

export default LoginCard
