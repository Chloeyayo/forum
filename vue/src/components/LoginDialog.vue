<template>
  <div id="login">
    <div class="wrapper" v-show="visible" @mousedown="changeVisibility">
      <loginForm
        v-if="isLogin"
        @changeStatus="changeStatus"
        @closeWrapper="closeWrapper"
        @reload="reload"
        @getUser="getUser"
      ></loginForm>
      <registerForm
        v-else
        @changeStatus="changeStatus"
        @closeWrapper="closeWrapper"
      ></registerForm>
    </div>
  </div>
</template>

<script>
import loginForm from "./login/loginForm";
import registerForm from "./login/registerForm";
export default {
  data() {
    return {};
  },
  props: {
    isLogin: true,
    visible: true,
  },
  methods: {
    onSubmit() {},
    changeVisibility(e) {
      if (e.target.className.indexOf("wrapper") != -1) {
        this.$emit("handleClose");
      }
    },
    changeStatus() {
      this.$emit("changeStatus");
    },
    closeWrapper() {
      this.$emit("handleClose");
    },
    reload(){
      this.$emit("reload");
    },
    getUser(data) {
      this.$emit("getUser",data)
    }
  },
  components: {
    loginForm,
    registerForm,
  },
};
</script>

<style lang="less" scoped>
#login {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
  .container {
    background-color: #fff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.08),
      10px 5px 15px rgba(0, 0, 0, 0.08);
    height: 330px;
    width: 275px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 6px;
    /deep/.el-form.login-form {
      margin: 80px 20px 10px;
    }
    /deep/.el-form.register-form {
      margin: 40px 20px;
    }

    /deep/.el-form-item__content {
      margin-left: 0px !important;
    }
    /deep/ .form-footer {
      text-align: center;
      position: absolute;
      bottom: 10px;
      width: 236px;
    }
  }
}
.change-wrapper {
  width: 100%;
  text-align: center;
}
</style>