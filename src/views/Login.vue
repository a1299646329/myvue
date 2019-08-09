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
        <canvas id='canvas'></canvas>
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
    mounted(){
        var config = {
            vx: 4,
            vy:  4,
            height: 2,
            width: 2,
            count: 150,
            color: "121, 162, 185",
            stroke: "100,200,180",
            dist: 6000,
            e_dist: 20000,
            max_conn: 10
        }

        this.isHhhh(config);
    }
}
</script>

<style scoped>
    @import '../assets/css/login.css';
</style>