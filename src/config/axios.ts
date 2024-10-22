import axios from 'axios'

const requestCountries = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' },
})

export { requestCountries }
