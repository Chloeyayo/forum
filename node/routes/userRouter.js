const express = require('express');
//创建路由容器
const router = express.Router();
//导出路由对象，在app.js文件中挂载router;
const User = require('../models/users')
const jwt = require('../lib/token')
const bcrypt = require('bcrypt')
const URL = require("url")


router.post("/register", async (req, res) => {
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

  const user = await User.create(req.body).catch(err => {
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

router.post("/login", async (req, res) => {
  const body = req.body;
  const findResult = await User.findOne({
    email: body.email
  })
  if (!findResult) {
    return res.json({
      err_code: 1,
      msg: "未找到用户"
    })
  }

  const compare = await bcrypt.compare(body.password, findResult.password)
  if (!compare) {
    return res.json({
      err_code: 2,
      msg: "密码错误"
    })
  }

  const token = await jwt.setToken(findResult.email).catch(err => { console.log(err); })
  findResult.avatar=req.protocol + '://' + req.get('host')+findResult.avatar
  console.log(findResult);
  res.json({
    err_code: 0,
    user: findResult,

    token,
  })
})

router.post("/profile", async (req, res) => {
  const user = await User.findOne({ email: req.user.email })
  user.avatar=req.protocol + '://' + req.get('host')+user.avatar
  res.json(user)

})
module.exports = router