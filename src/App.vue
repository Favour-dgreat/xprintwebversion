<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <header >
    
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
/* .font {
  font-family: 'Work Sans', sans-serif;
} */

</style>
