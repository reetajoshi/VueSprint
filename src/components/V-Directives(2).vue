<template>
    <div class="container">
        <div class="bg-info p-5 m-3 rounded text-center">
            <h1>{{ msg }}</h1>
            <img alt="Vue logo" class="logo" :src="url" width="125" height="110" />
            <p v-text="text"></p>
            <div v-html="html"></div>
            <div><button @click="sayHello" class="btn btn-primary p-2 m-2 rounded" v-if="showButton">Click Me!</button>
            <p v-else>Button Hidden!</p></div>
            <p v-for="word in arr" style="display: inline-block;">{{ word }}</p>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    const msg=ref("Hello, Vue!")
    const url=ref("https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png")
    const text=ref("This is text using v-text")
    const html=ref("<h3>This is h3 tag using v-html</h3>")
    const showButton=ref(true)
    const sayHello=()=>{
        alert('Hey! Hello')
        showButton.value=false

    }
    const arr=ref(['The','words','in','this','para','are','displayed','using','v-for.'])
</script>

<style>
    body{
        background-color: #242424;
    }
    h1,h3,p{
        color:#35495e;
        margin-left: 20px;
    }
    .bg-info{
        background-color: rgb(2, 214, 143) !important;
    }
    .btn-primary{
        background-color: #35495e !important;
        border: none;
    }
    
</style>