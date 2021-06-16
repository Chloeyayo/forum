<template>
  <div class="profile-container">
    <div class="content-left content">
      <div class="user-info card">
        <div class="info-top"></div>
        <div class="info-avatar">
          <el-avatar
            icon="el-icon-user-solid"
            size="large"
            shape="circle"
            :src="userInfo.avatar"
            fit="fill"
          ></el-avatar>
        </div>
        <div class="info-content">
          <div class="info-nickname">
            {{ userInfo.nickname }}
          </div>
        </div>
      </div>
    </div>
    <div class="content-right content">
      <div class="user-profile card">
        <div class="profile-top">
          <div class="profile-icon"></div>
          个人信息
        </div>
        <el-form ref="form" :model="userInfo" label-width="80px">
          <el-form-item label="昵称">
            <el-input v-model="userInfo.nickname"></el-input>
          </el-form-item>
          <el-form-item label="简介">
            <el-input type="textarea" v-model="userInfo.bio"></el-input>
          </el-form-item>
          <el-form-item label="特殊资源">
            <el-radio-group v-model="userInfo.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/request/api";
export default {
  data() {
    return {
      userInfo: {},
    };
  },
  methods: {
    async getData() {
      const token = window.sessionStorage["authorization"];
      const res = await Api.profileApi(token).catch((err) => {
        this.$message.error(err);
      });
      this.userInfo = res.data;
      console.log(this.userInfo);
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="less" scoped>
.profile-container {
  display: flex;
  width: 100%;
  height: 100%;

  .content {
    padding: 10px 10px;
  }
  .content-left {
    width: 340px;
    padding-left:40px;
  }
  .card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-width: 0;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  .user-info {
    position: relative;
    .info-top {
      width: 100%;
      height: 100px;
      background-color: #6c757d;
    }
    .info-avatar {
      width: 100%;
      position: relative;
      height: 80px;

      .el-avatar--large {
        position: absolute;
        top: -80px;
        left: 0;
        right: 0;
        margin: auto;
        width: 140px;
        height: 140px;
        line-height: 140px;
      }
    }
    .info-content {
      font-size: 24px;
      margin-bottom: 30px;
    }
  }
  .content-right {
    flex-grow: 1;
    .user-profile {
      justify-content: left;
      flex-direction: column;
      padding: 15px 25px;
      .profile-top {
        position: relative;
        margin-bottom: 20px;
        .profile-icon {
          display: inline-block;
          position: absolute;
          top: 2px;
          left: -8px;
          width: 4px;
          height: 18px;
          background-color: #575757;
          border-radius: 4px;
        }
      }
      .el-form {
        width: 400px;
      }
    }
  }
}
</style>