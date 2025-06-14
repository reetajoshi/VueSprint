<template>
    <div class="container">
        <div class="bg-info p-2 m-3 rounded text-center">
            <h2>Vue3 App</h2>
            <img alt="Vue logo" class="logo p-2 m-2" src="https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png" width="125" height="125" />
            <h4>count: {{ counter }}</h4>
            <button class="btn btn-primary p-2 m-2" @click="increment">Increment</button>
        </div>
    </div>
</template>

<script setup>
    import {onMounted, ref,onUnmounted, onBeforeUpdate, onUpdated} from 'vue'
    let counter=ref(0)
    const increment=()=>{
        counter.value++
    }

    onMounted(()=>{
        console.log("componenet mounted")
    })

    onBeforeUpdate(()=>{
        console.log("on before update")
    })

    onUpdated(()=>{
        console.log("on update")
    })


    onUnmounted(()=>{
        console.log("componenet unmounted")
    })
</script>

<style scoped>
    h2,h4{
        color:#35495e;
    }
    .btn-primary{
        background-color: #35495e !important;
        color:white !important;
        border: none;
    }
    .bg-info{
        background-color: rgb(2, 214, 143) !important;
    }
</style>
