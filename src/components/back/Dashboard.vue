<template>
    <div id='container'>
        <Head></Head>
        <div id="dash">
            <p>目前我只是一个浏览区，以后添加补充功能</p>
        </div>
    </div>
</template>

<script>
    import Head from "./Head";
    export default {
        name: "Dash",
        components:{
            Head
        }
    };
    console.log('11111111111111111');
</script>

<style scoped>
    @import '../../assets/css/back/dash.css'
</style>
