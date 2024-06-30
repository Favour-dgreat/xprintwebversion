<template>
  <section class="bg-white">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <aside class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
        <img
          alt="Pattern"
          src="https://i.ibb.co/WgMqJGz/person-reading-cell-phone-messages.jpg"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </aside>

      <main
        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
      >
        <div class="max-w-xl lg:max-w-3xl">
          <div class="py-10">
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
                  <strong class="block font-medium text-gray-900">{{ successMessage }} </strong>
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
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg></button
                ></router-link>
              </div>
            </div>
            <div
              v-if="errorMessage"
              role="alert"
              class="rounded border-s-4 border-red-500 bg-red-50 p-4"
            >
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
          </div>
          <a class="block text-orange-600" href="/">
            <router-link to="/">
              <span class="sr-only">Home</span>
              <img src="../../assets/image/logo.png" class="w-16 h-16" alt=""
            /></router-link>
          </a>

          <h1 class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Welcome back!
          </h1>

          <p class="mt-4 leading-relaxed text-gray-500">Enter your details to login.</p>

          <form @submit.prevent="loginUser" class="mt-8 grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label for="Email" class="block text-sm font-medium text-gray-700"> Email </label>

              <input
                type="email"
                id="Email"
                v-model="email"
                name="email"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="Password" class="block text-sm font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                id="Password"
                v-model="password"
                name="password"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div class="col-span-6"></div>

            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                type="submit"
                :disabled="isLoading"
                class="inline-block shrink-0 rounded-md border border-orange-600 bg-orange-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-600 focus:outline-none focus:ring active:text-orange-500"
              >
                {{ isLoading ? 'Loading...' : 'Login' }}
              </button>
              <div class="block">
                <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                  Don't have an account?
                  <router-link to="/register">
                    <a href="#" class="text-gray-700 underline">Register</a>.</router-link
                  >
                </p>
                <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                  forgotten password ?
                  <router-link to="/forgotpassword">
                    <a href="#" class="text-gray-700 underline">Reset</a>.</router-link
                  >
                </p>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  </section>
</template>
<script>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const auth = getAuth()
    const email = ref('')
    const password = ref('')
    const error = ref(null)
    const router = useRouter()
    const isLoading = ref(false)
    const successMessage = ref('')
    const errorMessage = ref('')

    const loginUser = async () => {
      try {
        isLoading.value = true

        const resp = await signInWithEmailAndPassword(auth, email.value, password.value)
        let curruser = resp.user.uid
        // Login successful, display success message
        successMessage.value = 'Login successful. Redirecting...'

        // Set a timer to redirect after 2 seconds (adjust the delay as needed)
        setTimeout(() => {
          localStorage.setItem('ActiveUser', curruser)
          router.push('/dashboard')
        }, 2000) // 2 seconds delay
      } catch (err) {
        isLoading.value = false
        error.value = err.message
        // Display error message for a few seconds before clearing it
        errorMessage.value = 'An error occurred. Please check your email and try again.'

        // Clear the error message after 5 seconds (adjust the delay as needed)
        setTimeout(() => {
          errorMessage.value = ''
        }, 5000) // 5 seconds delay
      }
    }

    return { email, password, error, loginUser, isLoading, errorMessage, successMessage }
  }
}
</script>

<style scoped></style>
