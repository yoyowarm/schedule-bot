import axios from 'axios'

export function request () {
  const request = axios.create({
    baseURL: 'http://localhost:3000'
  })
  return request
}
