<template>
  <div id="app">
    <router-view></router-view>
    <router-view name='back'></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
    }
  }
</script>

<style>
    @import './assets/css/common.css';
</style>
