import axios from 'axios'

export const api = axios.create({
  // baseURL: "https://foodexplorer-api-k8d5.onrender.com"

  baseURL: "http://localhost:3333"
})

// SITE: foodexplorer2.netlify.app