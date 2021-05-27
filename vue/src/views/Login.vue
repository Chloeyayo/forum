<template>
  <div id="login">
    <loginForm v-if="isLogin"></loginForm>
    <registerForm v-else></registerForm>
    <div class="change-wrapper">
      <el-button
        type="text"
        size="default"
        @click="isLogin = !isLogin"
        class="change-btn"
      >
        {{isLogin?"立即注册":"立即登录"}}</el-button
      >
    </div>
  </div>
</template>

<script>
import loginForm from '../components/login/loginForm'
import registerForm from '../components/login/registerForm'
export default {
  data() {
    return {
      
      isLogin: false,
    };
  },
  methods: {
    onSubmit() {},
  },
  components: {
    loginForm,
    registerForm,
  }
};
</script>

<style lang="less" scoped>
#login {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .container {
    padding: 50px 20px 30px 0px;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.08);
    height:330px;
  }
}
.change-wrapper {
  width: 100%;
  text-align: center;
}
</style>