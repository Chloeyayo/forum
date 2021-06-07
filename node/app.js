const express = require('express');
const app = express();
const userRouter = require('./routes/user')
const path = require('path')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use("/public", express.static(path.join(__dirname, 'public')))

//跨域要放在router之前
app.all("*", function (req, res, next) {
  console.log(req.url);
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "*");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  
  next();
});

app.use((req, res, next) => {
  console.log("123");
  next()
})

app.use(userRouter)

app.listen("3000", () => {
  console.log("Listening");
})