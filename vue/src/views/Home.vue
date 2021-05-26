<template>
  <div class="home">
    <div class="header">
      <div class="container">
        <div class="header-left"></div>
        <div class="header-right">
          <el-button
            type="infor"
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
  components: {},
};
</script>
<style lang="less">

.header {
  border-bottom: 1px solid rgba(179, 179, 179, 0.2);
  .container {
    width: 1140px;
    margin: 0 auto;
    padding: 4px 0;
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
      }
    }
  }
}
</style>