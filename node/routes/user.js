const express = require('express');
//创建路由容器
const router = express.Router();
//导出路由对象，在app.js文件中挂载router;
const User = require('../models/users')
const jwt = require('../lib/token')

router.get('/', (req, res) => {
  console.log(req.query);
  res.json({
    success: true,
  })
})

router.post("/user/register", async (req, res) => {
  const body = req.body;
  const findEmailResult = await User.findOne({ email: body.email }).catch(err => {
    console.log(err);
    return res.json({
      err_code: 1,
      msg: "创建用户失败"
    })
  })
  if (findEmailResult) {
    console.log(findEmailResult);
    return res.json({
      err_code: 2,
      msg: "邮箱已存在"
    })
  }
  const findNicknameResult = await User.findOne({ nickname: body.nickname }).catch(err => {
    console.log(err);
    return res.json({
      err_code: 1,
      msg: "创建用户失败"
    })
  })
  if (findNicknameResult) {
    console.log(findNicknameResult);
    return res.json({
      err_code: 3,
      msg: "昵称已存在"
    })
  }

  const user = await new User(req.body).save().catch(err => {
    console.log(err);
    return res.json({
      err_code: 1,
      msg: "创建用户失败"
    })
  })
  console.log(user);
  res.json({
    err_code: 0,
    user,
    msg: "注册成功"
  })

})

router.post("/user/login", async (req, res) => {
  console.log(req.headers);
  const body = req.body;
  const findResult = await User.findOne({
    email: body.email,
    password: body.password
  })
  if (!findResult) {
    return res.json({
      err_code: 1,
      msg: "未找到用户"
    })
  }
  const token =await jwt.setToken(findResult.email).catch(err => {console.log(err);})
  console.log(token);
  res.json({
    err_code:0,
    nickname:findResult.nickname,
    token,
  })
})

module.exports = router