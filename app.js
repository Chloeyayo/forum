const express = require('express');
const app = express();
const registerRouter = require('./routes/register')
const path = require('path')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use("/public",express.static(path.join(__dirname, 'public')))

app.use(registerRouter)

app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "*");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
    res.send(200); //让options尝试请求快速结束
  else
    next();
});


app.listen("3000",()=>{
  console.log("Listening");
})
