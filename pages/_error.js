import React from 'react'
import Link from 'next/link'
import styled from 'react-emotion'

const Page = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background: white;
  font-family: Roboto, sans-serif;
  font-weight: 300;
`

const Error = () => <Page>
  Error , 404
  <br />
  <Link href='/'>
    <a className='btn btn-primary'>
      Back
    </a>
  </Link>
</Page>

Error.getInitialProps = ({ res, jsonPageRes }) => {
  const statusCode = res ? res.statusCode : jsonPageRes && jsonPageRes.status
  return { statusCode }
}

export default Error
