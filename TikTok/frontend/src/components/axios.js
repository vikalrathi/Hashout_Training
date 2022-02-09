import axios from 'axios'

const instance = axios.create({
  //baseURL: 'http://localhost:9000',
  baseURL: 'https://tiktok-back-end-hashout.herokuapp.com/',
})

export default instance
