<template>
  <div class="home">
    <headerNav></headerNav>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import headerNav from "@/components/Header";
import profile from "@/components/Profile";
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
  components: {
    headerNav,
    profile,
  },
};
</script>
<style lang="less" >

.home {
  width: 100%;
  height: 100%;
  background-color: rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  justify-content: center;
  .content-wrapper {
  max-width: 1140px;
  min-width: 0;
  width: 100%;
  height: 100%;
  margin: 20px auto;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

}
}
</style>