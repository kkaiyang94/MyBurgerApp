import axios from 'axios';
import { firebase } from './routes.json'

const instanace = axios.create({
  baseURL: firebase
})

export default instanace;