<template>
  <div class="card">
    <img src="../assets/girl.jpg" class="img-title">
    <a>个人blog</a>
    <p>个人实现的博客,无抄袭,纯手工打造,主要用于学习,想快速建站请绕行
      个人实现的博客,无抄袭,纯手工打造,主要用于学习,想快速建站请绕行</p>
  </div>
</template>

<script>
    export default {
        name: "Card"
    }
</script>

<style scoped>
  .card {
    background-color: rgba(0, 0, 0, 0);
    text-align: center;
    margin: 0;
    border: 1px solid #ccc;
    border-radius: 2px;
    height: 300px;
  }
  .img-title {
    display: block;
    width: 100%;
    height: 200px;
  }
  .card a {
    display:block;
    margin-top: 5px;
    font-weight: bold;
  }
  .card  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
</style>
