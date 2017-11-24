import { lifecycle } from 'recompose'
import Router from 'next/router'

const withAuth = lifecycle({
  async componentWillMount () {
    console.log('hi')
    // console.log(localStorage)
    // const _token = await localStorage.getItem('user')
    // if (_token === null) {
    //   Router.push('/')
    // }
  }
})

export default withAuth
