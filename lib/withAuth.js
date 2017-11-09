import { lifecycle } from 'recompose'

const withAuth = lifecycle({
  async componentWillMount () {
    const _token = await window.localStorage.getItem('_token')
    if (!_token === null) {
      console.log('AUTH !')
    } else {
      // window.location.replace('/register')
    }
  }
})

export default withAuth
