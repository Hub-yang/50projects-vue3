import axios from 'axios'

const service = axios.create({
  baseURL: '/',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
  },
})

service.interceptors.response.use(
  (response) => {
    const res = response.data
    return res
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default service
