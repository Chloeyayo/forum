const express = require('express');
const app = express();
const userRouter = require('./routes/userRouter')
const path = require('path')
const expressJwt = require('express-jwt')
const { verifyToken } = require('./lib/token')

const secret = "key"

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use("/public", express.static(path.join(__dirname, 'public')))

//跨域要放在router之前
app.all("*", function (req, res, next) {

  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "*");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");

  next();
});

// app.use((req, res, next) => {
//     if (req.headers.authorization) {
//       let token = req.headers.authorization.split(" ")[1]
//       console.log(token);
//     }
//     next();

// if (!token) {
//   return next()
// }
// verifyToken(token)
//   .then(data => {
//     req.data = data
//     console.log(req.data);
//     return next()
//   })
//   .catch(err => next(err))
// })


app.use(expressJwt({
  secret,
  algorithms: ['HS256']
}).unless({
  path: ['/user/register','/user/login'] //除了这个地址，其他的URL都需要验证
}));

app.use("/user", userRouter)

app.use(function (err, req, res, next) {
  if (err.status == 401) {
    return res.status(401).send('token失效');
  }
});

app.listen("3000", () => {
  console.log("Listening");
})