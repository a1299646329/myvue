<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="aaaaa">sasa</button>
    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'App',
  methods:{
    aaaaa (){
      axios.get("http://127.0.0.1:5000").then(function(r) {
        console.log(r.data);
        alert(r.data.message);
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
