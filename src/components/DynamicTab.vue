<template>
  <div>
    <button @click="currentTab = 'TabOne'">Tab One</button>
    <button @click="currentTab = 'TabTwo'">Tab Two</button>
    
    <component :is="currentTab" />
  </div>
</template>

<script setup>
import TabOne from '../components/TabOne.vue'
import TabTwo from '../components/TabTwo.vue'
import { ref } from 'vue'

const currentTab = ref('TabOne')
</script>
