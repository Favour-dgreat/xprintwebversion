<template>
  <div class="flex flex-col items-center justify-center h-screen px-4">
    <h1 class="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
    <p class="text-gray-600 text-lg mb-8">Trade faster and easier with our mobile app. Soon to be available on Apple Store!</p>
    <div class="flex space-x-4">
      <router-link to="/">
        <a
          href="#"
          class="bg-orange-500 capitalize hover:bg-orange-600 font-extrabold text-white py-2 px-4 rounded-xl shadow-lg transition duration-300"
          >back to home</a
        ></router-link
      >
      <router-link to="mailto:contact@xprintxchange.com">
        <a
          href="#"
          class="bg-gray-300 capitalize hover:bg-gray-400 font-extrabold text-gray-800 py-2 px-4 rounded-xl shadow-lg transition duration-300"
          >Leave a message</a
        ></router-link
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
