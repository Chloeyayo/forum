<template>
  <div id="login">
    <div class="login-container">
      <el-form
        :model="loginForm"
        ref="form"
        :rules="rules"
        label-width="80px"
        :inline="false"
        size="normal"
      >
        <el-form-item label="Username" prop="用户名">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
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
#login {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  .login-container {
  padding: 30px;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.08);
}
}

</style>