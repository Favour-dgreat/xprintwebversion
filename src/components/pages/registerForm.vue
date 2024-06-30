<template>
  <div>
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

        <strong class="block font-medium">{{ errorMessage }} </strong>
      </div>
    </div>
    <div v-if="errorMessage2" role="alert" class="rounded-xl border border-gray-100 bg-white p-4">
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
          <strong class="block font-medium text-gray-900"> success !</strong>

          <p class="mt-1 text-sm text-gray-700">
            {{ errorMessage2 }}
          </p>
        </div>
      </div>
    </div>
    <form @submit.prevent="registerUser" class="mt-8 grid grid-cols-6 gap-6">
      <div class="col-span-6 sm:col-span-3">
        <label for="fullName" class="block text-sm font-medium text-gray-700"> Full Name </label>

        <input
          type="text"
          id="fullName"
          name="full_name"
          v-model="fullName"
          class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div class="col-span-6 sm:col-span-3">
        <label for="userName" class="block text-sm font-medium text-gray-700"> User Name </label>

        <input
          type="text"
          id="userName"
          v-model="userName"
          name="user_name"
          class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div class="col-span-6 sm:col-span-3">
        <label for="Email" class="block text-sm font-medium text-gray-700"> Email </label>

        <input
          type="email"
          v-model="email"
          id="Email"
          name="email"
          class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
      </div>
      <div class="col-span-6 sm:col-span-3">
        <label for="phoneNumber" class="block text-sm font-medium text-gray-700">
          Phone Number
        </label>

        <input
          type="tel"
          id="phoneNumber"
          v-model="number"
          name="phoneNumber"
          class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
      </div>

      <div class="col-span-6 sm:col-span-3">
        <label for="Password" class="block text-sm font-medium text-gray-700"> Password </label>

        <input
          type="password"
          id="Password"
          v-model="password"
          name="password"
          class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
      </div>

      <!-- <div class="col-span-6 sm:col-span-3">
        <label for="PasswordConfirmation" class="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>

        <input
          type="password"
          v-model="confirmPassword"
          id="PasswordConfirmation"
          name="password_confirmation"
          class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
      </div> -->

      <div class="col-span-6">
        <p class="text-sm text-gray-500">
          By creating an account, you agree to our
          <a href="#" class="text-gray-700 underline"> terms and conditions </a>
          and
          <a href="#" class="text-gray-700 underline">privacy policy</a>.
        </p>
      </div>

      <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button
          type="submit"
          :disabled="isLoading"
          class="inline-block shrink-0 rounded-md border border-orange-600 bg-orange-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-600 focus:outline-none focus:ring active:text-orange-500"
        >
          {{ isLoading ? 'Loading...' : 'Create an account' }}
        </button>

        <p class="mt-4 text-sm text-gray-500 sm:mt-0">
          Already have an account?
          <router-link to="/login">
            <a href="#" class="text-gray-700 underline">Log in</a>.</router-link
          >
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

// import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { crud } from '../../services/index.mjs'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const auth = getAuth()
    const userName = ref('')
    const number = ref('')
    const fullName = ref('')
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const errorMessage = ref(null) // Add this line to define errorMessage
    const errorMessage2 = ref(null) // Add this line to define errorMessage
    const router = useRouter()
    const isLoading = ref(false)
    const clearErrorMessage = () => {
      errorMessage.value = null
    }

    watch(errorMessage, (newErrorMessage) => {
      if (newErrorMessage) {
        setTimeout(clearErrorMessage, 5000) // Clear error message after 5 seconds
      }
    })
    const clearErrorMessage2 = () => {
      errorMessage2.value = null
      router.push({ path: '/login' })
    }

    watch(errorMessage2, (newErrorMessage2) => {
      if (newErrorMessage2) {
        setTimeout(clearErrorMessage2, 5000) // Clear error message after 5 seconds
      }
    })

    const isEmailValid = (email) => {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      return emailPattern.test(email)
    }

    const isPhoneNumberValid = (phoneNumber) => {
      return phoneNumber.length <= 11
    }

    const registerUser = async () => {
      try {
        let data = {
          email: email.value,
          phoneNumber: number.value,
          fullName: fullName.value,
          userName: userName.value
        }

        if (!isEmailValid(email.value)) {
          errorMessage.value = 'Invalid email'
          return
        }

        if (!isPhoneNumberValid(number.value)) {
          errorMessage.value = 'Phone number should be 11 digits or less'
          return
        }
        const resetLoadingState = () => {
          isLoading.value = false
        }

        // if (password.value !== confirmPassword.value) {
        // errorMessage.value = 'Passwords do not match'
        // return
        // }
        isLoading.value = true
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.value,
          password.value
        )

        if (userCredential && userCredential.user) {
          // Add user data to your database
          await crud.addDocWithId('users', userCredential.user.uid, data)

          // Display a success message
          // alert('User created')
          errorMessage2.value = 'Account registered successfully.'

          // Route to the login page
          // router.push({ path: '/login' })
        }
      } catch (err) {
        errorMessage.value = err.message
        // console.log(err)
        //alert(err)  Update errorMessage
        if (err.code === 'auth/invalid-email') {
          errorMessage.value = 'Invalid email'
        }
        if (err.code === 'auth/email-already-in-use') {
          errorMessage.value = 'Email already exists'
        }

        // Handle other error cases here as needed
      } finally {
        // Reset loading state and button text regardless of success or error
        resetLoadingState()
      }
    }

    return {
      email,
      password,
      errorMessage, // Add errorMessage to return
      errorMessage2, // Add errorMessage to return
      registerUser,
      isLoading,
      email,
      number,
      fullName,
      userName
      // resetLoadingState
    }
  }
}
</script>

<style scoped></style>
