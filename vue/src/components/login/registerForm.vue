<template>
  <div class="login-container container">
    <el-form
      :model="loginForm"
      ref="form"
      :rules="rules"
      label-width="80px"
      :inline="false"
      size="normal"
    >
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="loginForm.email"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
      },
      rules: {},
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>

<style lang="less" scoped>

</style>