<template>
    <div class="container">
        <div class="bg-info p-5 m-3 rounded text-center">
            <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
            <h1>{{ message }}</h1>
        </div>
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
        color:#35495e;
        margin-left: 20px;
    }
    .bg-info{
        background-color: rgb(2, 214, 143) !important;
    }
    
</style>