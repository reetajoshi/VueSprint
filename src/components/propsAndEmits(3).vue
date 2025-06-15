<template>
    <div class="container">
        <div class="bg-info p-2 m-3 rounded text-center">
            <img alt="Vue logo" class="logo" src="https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png" width="100" height="100" />
            <h6>{{ msg }}</h6>
            <div v-for="element in arr">
                <p>{{ element.word }}</p>
            </div>
            <button class="btn btn-primary p-2 m-2" @click="handleClick">Click Me To Emit An Event!</button>
        </div>
    </div>
</template>

<script setup>
    const props=defineProps({
        msg:{
            type:String, 
            default:"this is default text"
        },
        arr:{
            type:Array,
            default:()=>[]
        },
    })
    const emit=defineEmits('greet')
    const handleClick=()=>{
        emit('greet','Hello, user!')
    }
</script>

<style scoped>
    h6{
        color:#35495e;
        margin-left: 20px;
    }
    .bg-info{
        background-color: rgb(2, 214, 143) !important;
    }
    .btn-primary{
        background-color: #35495e !important;
        color:white !important;
        border: none;
    }
    div p{
        margin:10px;
    }
</style>

<style>
    body{
        background-color: #242424;
    }
</style>