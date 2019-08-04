<template>
    <div id="header">
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
        <el-menu-item index="3">linux</el-menu-item>
        <el-menu-item index="4">归档</el-menu-item>
        <el-menu-item index="5" @click="$router.push('/life')">生活</el-menu-item>
        <el-menu-item index="6" @click="$router.push('/aboutme')">关于我</el-menu-item>
      </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Head",
    }
</script>

<style scoped>
  .el-menu{
    margin: 10px 0;
    padding-left: 50px;
    /*background-color: #EEF1F6;*/
    background-color: rgba(0, 0, 0, 0);
    border: #cccccc;
    font-size:18px;
  }
  .el-menu-item {
    color:black !important;
  }
  .el-menu-item:hover{
    background-color: rgba(0, 0, 0, 0) !important;
    color:blue !important;
  }
  .el-menu-item:focus{
    background-color: rgba(0, 0, 0, 0) !important;
  }
  .input_text {
    padding-left: 5px;
    border: 1px solid #ccc;
    border-radius: 2px;
    width: 158px;
    height: 26px;
    line-height: 26px;
    background-color: #e5e5e5;
  }
  .input_submit {
    background-color: #333;
    color: #FFF;
    margin-left: 5px;
    width: 50px;
    border: none;
    cursor: pointer;
    height: 28px;
    line-height: 28px;
    border-radius: 5px;
  }
  .search {
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: space-between;
  }
</style>
