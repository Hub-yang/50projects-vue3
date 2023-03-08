import axios from "axios"

const service = axios.create({
  baseURL: "/",
  timeout: 10000,
})

service.interceptors.request.use(
  (config) => {
    config.headers = {
      Accept: "application/json",
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data
    return res
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
