<template>
  <div>
    <div
      class="hidden z-50 my-4 w-56 text-base list-none bg-white divide-y divide-orange-100 shadow dark:bg-orange-700 dark:divide-orange-600 rounded-xl"
      id="dropdown"
    >
      <div class="py-3 px-4">
        <span class="block text-sm font-semibold text-orange-900 dark:text-white">{{
          userDetails.fullName
        }}</span>
        <span class="block text-sm text-orange-900 truncate dark:text-white"
          >{{ userDetails.email }}
        </span>
      </div>
      <ul class="py-1 text-orange-700 dark:text-orange-300" aria-labelledby="dropdown">
        <router-link to="/settings">
          <li>
            <a
              href="#"
              class="block py-2 px-4 text-sm hover:bg-orange-100 dark:hover:bg-orange-600 dark:text-orange-400 dark:hover:text-white"
              >Account settings</a
            >
          </li></router-link
        >
      </ul>
      <ul class="py-1 text-orange-700 dark:text-orange-300" aria-labelledby="dropdown">
        <li @click="logoutUser">
          <a
            href="#"
            class="block py-2 px-4 text-sm hover:bg-orange-100 dark:hover:bg-orange-600 dark:hover:text-white"
            >Sign out</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { getFirestore, doc, getDoc } from 'firebase/firestore' // Import Firestore functions
import { initFlowbite } from 'flowbite' // Import Flowbite initialization
import { auth } from '../../../../services/engine.mjs' // Import the Firebase auth object

export default {
  setup() {
    const router = useRouter() // Create a router instance

    const userDetails = ref({
      email: '',
      fullName: ''
    })
    async function fetchUserDetails() {
      try {
        // Get the current user's UID after login
        const userId = auth.currentUser.uid
        // console.log(userId)
        // Use the "users" collection to fetch user details
        const db = getFirestore()
        const userRef = doc(db, 'users', userId)
        const userDoc = await getDoc(userRef)

        if (userDoc.exists()) {
          userDetails.value = userDoc.data()
        } else {
          console.error('User document does not exist.')
        }
      } catch (error) {
        console.error('Error fetching user details:', error)
      }
    }
    onMounted(() => {
      // Initialize Flowbite
      initFlowbite()

      // Fetch user details after initializing Flowbite
      fetchUserDetails()
    })

    const logoutUser = () => {
      const auth = getAuth() // Replace with your Firebase authentication instance

      signOut(auth)
        .then(() => {
          // Logout successful
          console.log('User logged out')
          localStorage.clear('ActiveUser')
          router.push({ path: '/login' })
          // Redirect to the login page or perform any other necessary actions
        })
        .catch((error) => {
          console.error('Logout error:', error)
          // Handle logout error, if needed
        })
    }

    return {
      logoutUser,
      userDetails
    }
  }
}
</script>
<script></script>
<style scoped></style>
