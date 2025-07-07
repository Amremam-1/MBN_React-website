import axios from "axios"

// const baseURL = "https://filterr.net/admin/informatinal/api"
const baseURL = "https://mahercp.net/admin/informatinal/api"

// const api = axios.create({
//   baseURL,
//   headers: {
//     Authorization: `Bearer 287|MM1IYAxWB3RNG1d4Usc0swOhJEhl3VFsdkrbUU9A31a6e328`,
//     "Content-Type": "multipart/form-data",
//   },
// })

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
})

// Interceptor: بيضيف التوكن كل مرة قبل أي request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})


export const fetchDataApi = async (endpoint) => {
  const response = await api.get(`/${endpoint}`)

  return response.data
}

export const addNewData = async (endpoint, newItem) => {
  const response = await api.post(`/${endpoint}`, newItem)

  return response.data
}
