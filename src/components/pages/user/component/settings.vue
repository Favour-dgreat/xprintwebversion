<template>
  <div class="p-4 md:ml-64 h-auto pt-20">
    <div class="bg-orange-200 min-h-screen p-4">
      <div class="container mx-auto max-w-3xl mt-8">
        <h1 class="text-2xl font-bold text-orange-700 px-6 md:px-0">Account Settings</h1>
        <ul
          class="flex border-b border-orange-300 text-sm font-medium text-orange-600 mt-3 px-6 md:px-0"
        >
          <router-link to="/settings">
            <li class="mr-8 text-orange-900 border-b-2 border-orange-800">
              <a class="py-4 inline-block">Password reset</a>
            </li>
          </router-link>
          <router-link to="/resetEmail">
            <li class="mr-8 hover:text-orange-900">
              <a class="py-4 inline-block">Change Email</a>
            </li></router-link
          >
          <router-link to="/delete">
            <li class="mr-8 hover:text-orange-900">
              <a class="py-4 inline-block">Delete Account</a>
            </li>
          </router-link>
        </ul>

        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
