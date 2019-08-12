<template>
    <div id="head_body">
      <div class="search">
        <img src="../assets/title.png">
        <form>
          <input type="text" class="input_text" placeholder="请输入关键字">
          <input class='input_submit' type="submit" value="搜索">
        </form>
      </div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="0" @click="$router.push('/')"><a href=""><img src="../assets/logo.png" height="30" width="30"></a></el-menu-item>
        <el-menu-item index="1" @click="$router.push('/')">首页</el-menu-item>
        <el-menu-item index="2" @click="$router.push('/page2')">python</el-menu-item>
        <el-menu-item index="3" @click="$router.push('/login')">linux</el-menu-item>
        <el-menu-item index="4" @click="$router.push('/admin')">归档</el-menu-item>
        <el-menu-item index="5" @click="$router.push('/life')">生活</el-menu-item>
        <el-menu-item index="6" @click="$router.push('/aboutme')">关于我</el-menu-item>
      </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Head",
        data() {
          return {
            activeIndex: '',
            handleSelect: '',
            select: ''
          }
        }
    }
</script>

<style scoped>
    @import '../assets/css/head.css';
</style>
