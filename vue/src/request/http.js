const axios = require('axios')
const server=axios.create({
  baseURL:"http://localhost:3000"
})
console.log();
module.exports =server