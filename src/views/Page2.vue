<template>
  <div>
    <div id="contents">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  </div>
</template>

<script>
  import Card from "../components/Card"
  export default {
      name: "Page2",
    components:{
      Card
    }
  }
</script>

<style scoped>
  #contents{
    /*width: 80%;*/
    /*margin: 0 auto;*/
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /*width: 100%;*/
    /*max-width: 650px;*/
    /*height: auto;*/
    /*display: flex;*/
    /*flex-wrap: wrap;*/
    /*justify-content: space-between;*/
  }

</style>
