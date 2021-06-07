const jwt = require("jsonwebtoken")
const signkey = "key"

exports.setToken = function (email) {
  return new Promise((resolve, reject) => {
    const token = jwt.sign({ email }, signkey, { expiresIn: '1h' })
    resolve(token)
  })
}

exports.verifyToken = function (token) {
  return new Promise((resolve, reject) => {
    const decoded = jwt.verify(token.split(' ')[1], signkey)
    resolve(decoded)
  })
}