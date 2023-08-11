import axios, { isAxiosError } from 'axios'

const AxiosServer = axios.create({
  baseURL: 'http://0.0.0.0:3001',
  timeout: 5000,
  headers: { accept: 'application/json' },
})

export { isAxiosError, AxiosServer }
