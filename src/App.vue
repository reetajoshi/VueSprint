<template>
    <slots>
        <template #header>
            <h1>Vue3 App</h1>
        </template>
        
        <div class="container p-5">
            <div class="bg-info p-2 m-4 rounded text-center">
                <dynComp></dynComp>
            </div>
        </div>
       
        <template #footer>
            <p>&copy copyright 2025 | All rights reserved</p>
        </template>
    </slots>
</template>

<script setup>
    import slots from './components/slots(5).vue'
    import dynComp from './components/dynamicComponents(5).vue'
</script>

<style>
    body{
        background-color: #242424;
        color:white;
    }
    .bg-info{
        background-color:rgb(2, 214, 143) !important;
    }
</style>