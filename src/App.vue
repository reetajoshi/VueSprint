<template>
        <div class="container p-5">
            <lifecycleHooks/>
            <div class="bg-info p-2 m-4 rounded text-center"> |
                <router-link to="/">Home</router-link> |
                <router-link :to="{ name: 'about' }">About</router-link> |
                <router-link :to="`/profile/101`">Profile 101</router-link> |
                <router-view></router-view>
            </div>
        </div>
</template>

<script setup>
    import lifecycleHooks from './components/lifecycleHooks(4).vue'
</script>

<style>
    body{
        background-color: #242424;
        color:black;
    }
    .bg-info{
        background-color:rgb(3, 233, 156) !important;
    }
</style>