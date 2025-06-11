<template>
  <div>
    <ul>
      <h2>Movies</h2>
      <li v-for="p in products" :key="p.product" @click="addToCart(p)">
        {{ p.product }}, INR: {{ p.price }}
      </li>
    </ul>

    <hr />

    <h2>Budget</h2>
    <table border="1">
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>No of tickets</th>
      </tr>
      <tr v-for="p in cart" :key="p.product">
        <td>{{ p.product }}</td>
        <td>{{ p.price }}</td>
        <td>{{ p.quantity }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const products = [
  { product: "salaar", price: 150 },
  { product: "Project k", price: 200 },
  { product: "Radhe Shyam", price: 100 },
]

const cart = ref([])

watch(cart, (newVal, oldVal) => {
  const itemIndex=cart.value.findIndex((x)=>x.quantity>5)
  if(itemIndex !== -1){
    cart.value[itemIndex].quantity--
  }
}, { deep: true })

function addToCart(item) {
  const itemIndex = cart.value.findIndex(x => x.product === item.product)
  if (itemIndex !== -1) {
    cart.value[itemIndex].quantity++
  } else {
    cart.value.push({
      product: item.product,
      price: item.price,
      quantity: 1,
    })
  }
}
</script>
