<template>
  <div>
    <div class="header" v-if="update">
      <div class="container">
        <div class="header-left"></div>
        <div class="header-right login-wrapper" v-if="!nickname">
          <el-button
            type="text"
            size="small"
            @click="loginBtn"
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
        <div class="header-right logout-wrapper" v-else>
          <div class="nickname">
            {{ nickname }}
          </div>
          <el-button
            type="text"
            size="small"
            @click="logoutBtn"
            class="logout-btn btn"
            >Logout</el-button
          >
        </div>
      </div>
    </div>

    <login
      :isLogin="isLogin"
      :visible.sync="loginDialogVisible"
      @handleClose="handleLoginDialogClose"
      @changeStatus="changeStatus"
      @reload="reload"
    ></login>
  </div>
</template>

<script>
import login from "@/components/LoginDialog";
export default {
  data() {
    return {
      loginDialogVisible: false,
      isLogin: true,
      nickname: window.sessionStorage.getItem("nickname"),
      update: true,
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
    logoutBtn() {
      window.sessionStorage.removeItem("nickname");
      this.nickname = "";
      window.sessionStorage.removeItem("token");
      this.reload();
    },
    reload() {
      this.update = false;
      this.$nextTick(() => {
        this.update = true;
        console.log("updated");
        this.nickname = window.sessionStorage.getItem("nickname");
      });
    },
  },
  components: {
    login,
  },
};
</script>

<style lang="less" scoped>
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
      .nickname {
        margin-right: 20px;
        line-height: 40px;
        
      }
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