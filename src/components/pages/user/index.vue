<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900">
    <navbar />
    <!-- Sidebar -->

    <asideBar />
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import navbar from './component/navbar.vue'
// import mainSection from './component/main.vue'
import asideBar from './component/sidebar.vue'
</script>

<style scoped></style>
