<template>
  <div id="app">
    <Navbar></Navbar>
    <Foot></Foot>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Foot from  "./components/Foot"
export default {
  name: 'App',
  components: {
    Navbar,
    Foot
  }
}
</script>

<style>
  #app {
    width: 1170px;
    margin: auto;
  }
</style>
