import axios from 'axios'

export const request = () => {
  const request = axios.create({
    baseURL: 'http://localhost:3000'
  })
  return request
}
