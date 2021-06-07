const axios = require('axios')
const server = axios.create({
  baseURL: "http://localhost:3000"
})

server.interceptors.request.use(
  config => {
    if(window.sessionStorage.getItem("token")){
      config.headers.Authorization =sessionStorage.getItem('token')
    }
    return config
  },
  error =>{
    return Promise.reject(error)
  })
module.exports = server