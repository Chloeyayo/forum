<template>
  <div class="home">
    <div class="header">
      <div class="container">
        <div class="header-left"></div>
        <div class="header-right">
          <el-button
            type="text"
            size="small"
            @click="loginBtn "
            class="login-btn btn"
            >Login</el-button
          >
          <el-button
            type="text"
            size="small"
            @click="registerBtn"
            class="register-btn btn"
            >Register</el-button
          >
        </div>
      </div>
    </div>

    <login
      :isLogin="isLogin"
      :visible.sync="loginDialogVisible"
      @handleClose="handleLoginDialogClose"
      @changeStatus="changeStatus"
    ></login>
  </div>
</template>

<script>
// @ is an alias to /src
import login from "@/components/Login";
export default {
  name: "Home",
  data() {
    return {
      loginDialogVisible: false,
      isLogin: true,
    };
  },
  methods: {
    loginBtn() {
      this.isLogin = true;
      this.loginDialogVisible = true;
    },
    registerBtn() {
      this.isLogin = false;
      this.loginDialogVisible = true;
    },
    handleLoginDialogClose() {
      this.loginDialogVisible = false;
    },
    changeStatus() {
      this.isLogin = !this.isLogin;
    },
  },
  components: {
    login,
  },
};
</script>
<style lang="less">
.header {
  border-bottom: 1px solid rgba(179, 179, 179, 0.2);
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.01), 0 10px 30px rgba(0, 0, 0, 0.08);
  .container {
    width: 1140px;
    height: 60px;
    margin: 0 auto;
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
    .header-left {
      width: 400px;
    }
    .header-right {
      width: 400px;
      display: flex;
      justify-content: flex-end;
      .btn {
        margin-right: 20px;
        font-size: 18px;
        color: rgb(85, 85, 85);
        font-weight: 800;
        &:hover {
          color: #13aa52;
        }
      }
    }
  }
}
</style>