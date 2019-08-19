<template>
    <div id="head_body">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="0" @click="$router.push('/')"><a href=""><img src="@/assets/logo.png" height="30" width="30"></a></el-menu-item>
        <el-menu-item index="1" @click="$router.push('/dashboard')">仪盘表</el-menu-item>
        <el-menu-item index="2" @click="$router.push('/edit')">写文章</el-menu-item>
        <el-menu-item index="3" @click="$router.push('/login')">所有文章</el-menu-item>
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
    #head_body {
        background-color: #001529 !important;
        margin: 0 auto;
    },
    .el-menu{
        margin: 0;
        padding-left: 50px;
        background-color: rgba(0, 0, 0, 0);
        border: #cccccc;
    },
    .el-menu-item {
        color:hsla(0,0%,100%,.65) !important;
        font-size:14px;
    },
    .el-menu-item:hover{
        background-color: rgba(0, 0, 0, 0) !important;
        color: #FFF !important;
    },
    .el-menu-item:focus{
        background-color: rgba(0, 0, 0, 0) !important;
        color: #FFF !important;
    },
    .el-menu-item.is-active{
        border-bottom: none;
        color: red !important;
    }
</style>
