<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                message:"Hello, World!"
            }
        }
    }
</script>

<style>
    h1{
        color:hsla(160, 100%, 37%, 1);
    }
</style>