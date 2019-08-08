<template>
    <div class='login_layout'>
      	<div class="top">
      		<h1>博客管理系统</h1>
      	</div>
      	<form>
            <div>
                <label>用户名：</label>
                <input type="text" value="" v-model="name" placeholder="请输入用户名">
            </div>
            <div>
                <label>密码：</label>
                <input type="text" value="" v-model="age" placeholder="请输入年龄">
            </div>
            <div>
                <button @click="submitForm($event)">登录</button>
            </div>
      	</form>
    </div>
</template>

<script>

  export default {
    name: "Login",
    components:{
    }
  }
</script>

<style scoped>
	.login_layout {
        background-color: #F11111;
        margin: 0;
        padding: 0;
        height: 100%;
	}

</style>