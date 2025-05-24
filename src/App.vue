<template>
  <HelloWorld msg="this is vuejs3" isLogged="True" :items="itemData" @greeted="handleFun"/>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';
const itemData =ref([
  {id:1, name:"Sai Sravani"},
  {id:2, name:"sai Varma"}
]);
const handleFun=(msg)=>{
  alert(msg);
};
</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

