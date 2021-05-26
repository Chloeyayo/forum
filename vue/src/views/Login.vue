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
      loginForm:{
        username:'',
      },
      rules:{}
    };
  },
  methods: {
    onSubmit(){}
    }
};
</script>

<style lang="less" scoped>
</style>