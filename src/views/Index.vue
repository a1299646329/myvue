<template>
  <div>
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
  import Card from "../components/Card";
  import Head from "../components/Head";
  import Foot from "../components/Foot";
  export default {
    name: "Index",
    components:{
      Card,
      Head,
      Foot
    }
  }
</script>

<style scoped>
  #inner {
    width: 1170px;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0);
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-gap: 10px 10px;
    justify-content: space-around;
  }
</style>
