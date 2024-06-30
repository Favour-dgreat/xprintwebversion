<template>
  <!-- component -->
  <div class="min-h-screen bg-white py-6 flex flex-col justify-center sm:py-12">
    <div>
      <router-link to="/">
        <img class="w-10 m-4 top-0 absolute" src="../../assets/image/logo.png" alt=""
      /></router-link>
    </div>
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-orange-300 to-orange-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
      ></div>
      <div class="relative px-4 py-10 bg-white shadow-2xl sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div>
            <h1 class="text-2xl font-semibold capitalize">join us</h1>
          </div>
          <div class="flex py-5 justify-center max-w-xs items-center space-x-3">
            <span
              class="w-12 h-12 rounded-full bg-orange-100 text-black text-xl font-bold text-center items-center place-content-center justify-center flex"
              >1</span
            >
            <span class="w-12 bg-orange-100 rounded-lg h-1"></span>

            <span
              class="w-12 h-12 rounded-full bg-orange-400 text-white text-center items-center place-content-center justify-center flex"
              >2</span
            >
            <!-- <span class="w-12 bg-orange-100 rounded-lg h-1"></span>

            <span
              class="w-12 h-12 rounded-full bg-orange-100 text-center items-center place-content-center justify-center flex"
              >3</span
            > -->
          </div>
          <div class="divide-y divide-orange-200">
            <div class="py-8 text-base leading-6 space-y-4 text-orange-400 sm:text-lg sm:leading-7">
              <!-- <registerForm /> -->
              <registerform2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import registerForm from './registerForm.vue'
import registerform2 from './registerform2.vue'
</script>

<style scoped></style>
