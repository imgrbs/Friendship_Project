import React from 'react'

import Setting from '../components/Setting/index'

const SettingPage = ({url : {query}}) => {
  return (
    <Setting {...query} />
  )
}

SettingPage.getInitialProps = async props => {
  return { init: true }
}

export default SettingPage
