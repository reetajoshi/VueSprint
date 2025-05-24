<template>
    <div>
        <h1>Vue 3 App 1</h1>
        <Counter />
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link :to="`/profile/101`">Profile 101</router-link>
        <router-view></router-view>
    </div>
</template>
<script setup>
import Counter from '../components/Counter.vue'
</script>
<style></style>