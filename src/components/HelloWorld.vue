<template>
  <div class="p-6 max-w-xl mx-auto text-center space-y-6">
<!-- <h1 class="text-2xl font-bold">Hello World</h1> -->
    <h1 class="text-2xl font-bold">{{ message }}</h1>
    <p class="text-gray-600">{{ msg }} : {{ isLogged }} </p>
   
      <div v-for="(items, k) in items" :key="k">
        <p class="text-gray-600">{{ items.id }} : {{ items.name }}</p>
      </div>
     
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  msg:{
    type: String,
    default: 'hello world'
  },
  isLogged: {
    type: Boolean,
    default: true,
  },
  items :{
    type  : Array,
    default: ()=> []
  },
  id:{
    type:[Number,null],
    required:false
  }
});
const message= ref('Learning Frontend');
const sendGreet=()=>{
  message.value="Hello,vue 3- button clicked";
  console.log('Button clicked');
  
}
</script>


