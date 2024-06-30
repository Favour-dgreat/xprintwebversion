<template>
  <div class="mx-2">
   
    <div class="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <h1 class="text-2xl font-medium">Reset password</h1>
      <p class="text-slate-500">Fill up the form to reset the password</p>
<div
        v-if="successMessage"
        role="alert"
        class="rounded-xl border border-gray-100 bg-white p-4"
      >
        <div class="flex items-start gap-4">
          <span class="text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>

          <div class="flex-1">
            <strong class="block font-medium text-gray-900">password reset successful! </strong>

            <p class="mt-1 text-sm text-gray-700">{{ successMessage }}</p>
          </div>
          <router-link to="/login">
            <button class="text-gray-500 transition hover:text-gray-600">
              <span class="sr-only">Dismiss popup</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg></button
          ></router-link>
        </div>
      </div>
      <div v-if="errorMessage" role="alert" class="rounded border-s-4 border-red-500 bg-red-50 p-4">
        <div class="flex items-center gap-2 text-red-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clip-rule="evenodd"
            />
          </svg>

          <strong class="block font-medium"> Something went wrong </strong>
        </div>

        <p class="mt-2 text-sm text-red-700">
          {{ errorMessage }}
        </p>
      </div>
      <form @submit.prevent="resetPassword" class="my-10">
        <div class="flex flex-col space-y-5">
          <label for="email">
            <p class="font-medium text-slate-700 pb-2">Email address</p>
            <input
              id="email"
              name="email"
              v-model="email"
              type="email"
              class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Enter email address"
            />
          </label>

          <button type="submit"
            class="w-full py-3 font-medium text-white bg-orange-600 hover:bg-orange-500 rounded-lg border-orange-500 hover:shadow inline-flex space-x-2 items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
              />
            </svg>

            <span>Reset password</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { sendPasswordResetEmail } from 'firebase/auth'
import { getAuth } from 'firebase/auth'

export default {
  data() {
    return {
      email: '',
      errorMessage: '',
      successMessage: ''
    }
  },
  methods: {
    async resetPassword() {
      const auth = getAuth()
      const email = this.email

      try {
        await sendPasswordResetEmail(auth, email)
        this.successMessage = 'Password reset email sent. Please check your email.'
        this.errorMessage = '' // Clear any previous error message
      } catch (error) {
        this.successMessage = ''
        this.errorMessage = 'An error occurred. Please check your email or try again.'
      }
    }
  }
}
</script>

<style scoped></style>
