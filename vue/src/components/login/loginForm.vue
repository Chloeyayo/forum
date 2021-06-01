<template>
  <div class="login-container container">
    <el-form
      class="login-form"
      :model="loginForm"
      ref="form"
      :rules="rules"
      label-width="80px"
      :inline="false"
      size="normal"
    >
      <el-form-item prop="nickname">
        <el-input
          placeholder="请输入邮箱"
          prefix-icon="el-icon-postcard"
          v-model="loginForm.email"
          autofocus
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
        <el-button type="primary" @click="onSubmit(loginForm)">登录</el-button>
        <el-button>取消</el-button>
      <div class="change-wrapper">
        <el-button
          type="text"
          size="default"
          @click="changeStatus"
          class="change-btn"
        >
         立即注册</el-button
        >
      </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Api from "@/request/api"
export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      rules: {},
    };
  },
  methods: {
    async onSubmit (data) {
      const result=await Api.loginApi(data)
      console.log(result);
    },
    changeStatus(){
      this.$emit("changeStatus")
    }
  },
};
</script>

<style lang="less" scoped>
.change-wrapper{
  text-align:center;
}
</style>