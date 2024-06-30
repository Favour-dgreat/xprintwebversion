<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import navbar from '../components/navbar.vue'
import hero from './hero.vue'
import about from './about.vue'
import faq from './faq.vue'
import foot from './footer.vue'
import section1 from './section.vue'
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <header class="background">
    <navbar />
    <hero />
  </header>
  <main>
    <about />
    <section1 />
    <faq />
    <foot />
  </main>
  <!-- <RouterView /> -->
</template>

<style scoped>

</style>
