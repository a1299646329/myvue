<template>
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
</template>

<script>
  import Card from "../components/Card"
  export default {
    name: "Index",
    components: {Card},
    comments:{
      Card
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
