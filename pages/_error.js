import React from 'react'
import Link from 'next/link'
import styled from 'react-emotion'
import { withProps } from 'recompose'

import Container from '../components/Core/global'
import colors from '../components/Core/colors'

const StyledContainer = styled(Container)`
  background: ${colors.background};
`
const StatusMsg = styled.span`
  color: ${colors.red};
`

const Page = withProps({
  className: 'd-flex justify-content-center align-items-center flex-column'
})(StyledContainer)


const Error = ({statusCode}) => (
  <Page>
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h3>Error, <StatusMsg>{statusCode}</StatusMsg></h3>
          <Link href="/">
            <a className="col-4 btn btn-primary btn-lg">Back</a>
          </Link>
        </div>
      </div>
    </div>
  </Page>
)

Error.getInitialProps = ({ res, jsonPageRes }) => {
  const statusCode = res ? res.statusCode : jsonPageRes && jsonPageRes.status
  return { statusCode }
}

export default Error
