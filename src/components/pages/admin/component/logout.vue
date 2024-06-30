<template>
  <div>
    <button @click="logoutUser" class="bg-red-600 rounded-2xl px-3 py-2 text-white capitalize font-semibold">logout</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { getAuth, signOut } from 'firebase/auth'
import { onMounted, onBeforeUnmount } from 'vue'
// import { initFlowbite } from 'flowbite'
import { useRouter } from 'vue-router' // Import the useRouter function from vue-router

export default {
  setup() {
    const router = useRouter() // Create a router instance

    // onMounted(() => {
    //   // Initialize Flowbite
    //   initFlowbite()

    //   // Fetch user details after initializing Flowbite
    // })

    const logoutUser = () => {
      const auth = getAuth() // Replace with your Firebase authentication instance

      signOut(auth)
        .then(() => {
          // Logout successful
          console.log('User logged out')
          localStorage.clear('ActiveUser')
          router.push('/adminLogin') // Use router.push to navigate to the login page
        })
        .catch((error) => {
          console.error('Logout error:', error)
          // Handle logout error, if needed
        })
    }

    onBeforeUnmount(() => {
      // Clean up any resources if needed
    })

    return {
      logoutUser
    }
  }
}
</script>

<style scoped></style>
