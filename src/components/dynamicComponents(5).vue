<template>
    <img alt="Vue logo" class="logo m-3" src="https://cdn.freebiesupply.com/logos/large/2x/vue-9-logo-png-transparent.png" width="100" height="100" />
    <h4 class="m-3">Dynamic Components</h4>
    <button @click="currentcomponent=Tab1" class="btn btn-primary p-2 m-3 w-50">Tab 1</button>
    <button @click="currentcomponent=Tab2" class="btn btn-primary p-2 m-3 w-50">Tab 2</button>
    <component :is="currentcomponent" />
</template>

<script setup>
    import Tab1 from './Tab1.vue'
    import Tab2 from './Tab2.vue'
    import {ref} from 'vue'
    const currentcomponent=ref(Tab1)
</script>

<style scoped>
    .btn-primary{
        background-color: #35495e !important;
        border: none;
    }
</style>