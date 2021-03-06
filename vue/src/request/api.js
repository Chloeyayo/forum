const axios = require('./http')
export default {
  registerApi(data) {
    return axios.post("/user/register", data)
  },
  loginApi(data){
    return axios.post("/user/login",data)
  },
  profileApi(token){
    return axios.post("/user/profile",{token})
  }
}