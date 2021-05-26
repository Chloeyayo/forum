
const express = require('express');
//创建路由容器
const router = express.Router();
//导出路由对象，在app.js文件中挂载router;

router.get('/', (req, res) => {
  console.log(req.query);
  res.json({
    success: true,
  })
})

module.exports = router