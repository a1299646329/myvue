<template>
  <div id="home-body">
    <Head></Head>
    <div id="inner">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
  import Card from "../base/Card";
  import Head from "../base/Head";
  import Foot from "../base/Foot";
  export default {
    name: "Home",
    components:{
      Card,
      Head,
      Foot
    }
  }
</script>

<style scoped>
  @import '../../assets/css/home.css'
</style>
