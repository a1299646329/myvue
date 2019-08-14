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
  import Card from "./Card";
  import Head from "./Head";
  import Foot from "./Foot";
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
