import axios from 'axios'
import {url} from '../url.json'

const instance = axios.create({
  baseURL: url
})

export default instance
