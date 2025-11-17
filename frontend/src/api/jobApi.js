import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api/jobs",
});

export const uploadJob = (data) => axiosInstance.post('/upload', data)
export const viewJobs = () => axiosInstance.get('/viewJobs')
export const filterJobs = (filters) => {
  const params = new URLSearchParams(filters).toString()
  return axiosInstance.get(`/filter?${params}`)
}
export const searchJobs = (query) => {
  const params = new URLSearchParams({ query }).toString()
  return axiosInstance.get(`/search?${params}`)
}
