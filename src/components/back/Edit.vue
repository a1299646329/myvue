<template>
    <div id='container'>
        <Head></Head>
        <div id="editor">
            <mavon-editor></mavon-editor>
        </div>
        <div id="edit-foot">
            <input type="button" value="发布">
        </div>
    </div>
</template>

<script>
    import { mavonEditor } from 'mavon-editor';
    import 'mavon-editor/dist/css/index.css';
    import Head from "./Head";
    export default {
        name: "Edit",
        components:{
            mavonEditor,
            Head
        }
    }
</script>

<style scoped>
    @import '../../assets/css/back/edit.css'
</style>
