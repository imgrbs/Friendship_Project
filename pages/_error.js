import React from 'react'
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

const Error = () => <Page>Error , Hi!</Page>

Error.getInitialProps = ({ res, jsonPageRes }) => {
  const statusCode = res ? res.statusCode : jsonPageRes && jsonPageRes.status
  return { statusCode }
}

export default Error
