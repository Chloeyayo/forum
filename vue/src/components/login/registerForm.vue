<template>
  <div class="login-container container">
    <el-form
      class="register-form"
      :model="loginForm"
      ref="form"
      :rules="rules"
      label-width="80px"
      :inline="false"
      size="normal"
    >
      <el-form-item prop="email">
        <el-input
          placeholder="请输入邮箱"
          prefix-icon="el-icon-postcard"
          v-model="loginForm.email"
          autofocus
        ></el-input>
      </el-form-item>
      <el-form-item prop="nickname">
        <el-input
          placeholder="请输入昵称"
          prefix-icon="el-icon-user"
          v-model="loginForm.nickname"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
          v-model="loginForm.password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item class="form-footer">
        <el-button type="primary" @click="onSubmit(loginForm)"
          >立即创建</el-button
        >
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Api from "../../request/api";
export default {
  data() {
    return {
      loginForm: {
        email: "1",
        nickname: "1",
        password: "1",
      },
      rules: {},
    };
  },
  methods: {
    async onSubmit(data) {
      const result=await Api.registerApi(data).catch(error => {this.$message.error("网络错误")})
      console.log(result);
      const errorCode=result.data.err_code
      switch (errorCode) {
        case 1:
          return  this.$message.error("后台错误")
        case 2:
          return this.$message.error("邮箱重复")
        case 3:
          return this.$message.error("昵称重复")
      }
      this.$message.success("注册成功")
      this.$emit("closeWrapper")
    },
  },
};
</script>

<style lang="less" scoped>
</style>