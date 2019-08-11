<template>
    <div class="login-body">
        <div class='login-layout'>
          	<div class="top">
          		<h1>博客管理系统</h1>
          	</div>
          	<form>
                <div id='form-user'>
                    <label>用户名：</label>
                    <input type="text" value="" v-model="name" placeholder="请输入用户名">
                </div>
                <div id='form-pwd'>
                    <label>密码：</label>
                    <input type="text" value="" v-model="age" placeholder="请输入年龄">
                </div>
                <div id='form-btn'>
                    <button @click="submitForm($event)">登录</button>
                </div>
          	</form>
        </div>
        <div id="canvas-bg">
            <canvas id='canvas'>111</canvas>
        </div>
    </div>
</template>

<script>
  import { CanvasParticle } from '../assets/js/canvas-particle.js'
  export default {
    name: "Login",
    data() {
        return {
            name:'',
            age:''
        }
    },
    methods: {
        isHhhh (config){
            CanvasParticle(config)
        }
    },
    created(){
        var config = {
            vx: 4,//点x轴速度,正为右，负为左
            vy:  4,//点y轴速度
            height: 2,//点高宽，其实为正方形，所以不宜太大
            width: 2,
            count: 100,//点个数
            color: "121, 162, 185",//点颜色
            stroke: "130,255,255",//线条颜色
            dist: 6000,//点吸附距离
            e_dist: 20000,//鼠标吸附加速距离
            max_conn: 10//点到点最大连接数
        }
        this.isHhhh(config);
    },
    // beforeDestroy() {
    //     console.log('1111111111111');
    //     var loginBody=document.getElementById("login-body");
    //     console.log(loginBody);
    //     var canvasBg=document.getElementById("canvas-bg");
    //     console.log(canvasBg);
    //     loginBody.removeChild(canvasBg);
    //     console.log(this.$refs.canvas);
    //     console.log('2222222')
    // }
}
</script>

<style scoped>
    @import '../assets/css/login.css';
</style>