<template>
  <div id="header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="0" @click="$router.push('/')"><a href=""><img src="../assets/logo.png" height="30" width="30"></a></el-menu-item>
      <el-menu-item index="1" @click="$router.push('/')">首页</el-menu-item>
      <el-menu-item index="2" @click="$router.push('/page2')">python</el-menu-item>
      <el-menu-item index="3">linux</el-menu-item>
      <el-menu-item index="4">归档</el-menu-item>
      <el-menu-item index="5" @click="$router.push('/life')">生活</el-menu-item>
      <el-menu-item index="6" @click="$router.push('/aboutme')">关于我</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
    export default {
        name: "Navbar",
    }
</script>

<style scoped>
  .el-menu{
    margin: 10px 0;
    padding-left: 100px;
    background-color: #EEF1F6;
    font-size:18px;
  }
  .el-menu-item {
    color:red !important;
  }
  .el-menu-item:hover{
    background-color: darkgoldenrod !important;
    color:red !important;
  }
  .el-menu-item:focus{
    background-color: darkgoldenrod !important;
  }

</style>
