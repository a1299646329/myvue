<template>
  <div id="app">
    <Head></Head>
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
import Head from "./components/Head";
import Foot from  "./components/Foot"
export default {
  name: 'App',
  components: {
    Head,
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
