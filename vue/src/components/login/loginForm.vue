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
          @keyup.enter.native="onSubmit(loginForm)"
        ></el-input>
      </el-form-item>
      <el-form-item class="form-footer">
        <el-button type="primary" @click="onSubmit(loginForm)">登录</el-button>
        <el-button @click="closeWrapper">取消</el-button>
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
import Api from "@/request/api";
export default {
  data() {
    return {
      loginForm: {
        email: "1",
        password: "1",
      },
      rules: {},
    };
  },
  methods: {
    async onSubmit(form) {
      const { data: data } = await Api.loginApi(form);
      console.log(data);
      switch (data.err_code) {
        case 1:
          this.$message.error("邮箱不存在");
          return
        case 2:
          this.$message.error("邮箱或密码错误");
          return
      }
      window.sessionStorage.setItem("authorization", "Bearer " + data.token);
      window.sessionStorage.setItem("nickname", data.user.nickname);
      window.sessionStorage.setItem("avatar", data.user.avatar);
      this.$emit("getUser",data)
      this.$message.success("登录成功");
      this.closeWrapper();
    },
    changeStatus() {
      this.$emit("changeStatus");
    },
    closeWrapper() {
      this.$emit("closeWrapper");
      this.$emit("reload");
    },
  },
};
</script>

<style lang="less" scoped>
.change-wrapper {
  text-align: center;
}
</style>