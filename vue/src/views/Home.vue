<template>
  <div class="home">
    <div class="header">
      <div class="container">
        <div class="header-left"></div>
        <div class="header-right">
          <el-button
            type="text"
            size="small"
            @click="loginBtn"
            class="login-btn"
            >Login</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  methods: {
    loginBtn(){
      this.$router.push('/login')
    }
  },
  components: {},
};
</script>
<style lang="less">
body {
}
.header {
  border-bottom: 1px solid rgba(179, 179, 179, 0.2);
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.01),
              0 10px 30px rgba(0, 0, 0, 0.08);
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
      .login-btn {
        margin-right: 20px;
        font-size: 18px;
        color: rgb(85, 85, 85);
        font-weight: 800;
        &:hover{
          color: #13aa52
        }
      }
    }
  }
}
</style>