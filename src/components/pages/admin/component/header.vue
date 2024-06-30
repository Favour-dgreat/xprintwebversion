<template>
  <div>
    <div
      class="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 p-4"
    >
      <div class="flex-1 flex items-center space-x-2">
        <h5>
          <span class="text-gray-500"
            >welcome
            <span class="text-orange-500 font-extrabold">
              {{ userDetails.email }}
            </span>
          </span>
        </h5>
      </div>
      <div class="flex-1 flex items-center space-x-2">
        <h5>
          <span class="text-gray-500">Total xprintxchange users:</span>
          <span class="dark:text-white">23456</span>
        </h5>
      </div>
      <div class="flex-1 flex items-center space-x-2">
        <h5>
          <span class="text-gray-500">Total transactions on xprintxchange:</span>
          <span class="dark:text-white">1456</span>
        </h5>
      </div>
      <div>
        <logout />
      </div>
    </div>
    <div>
      <span class="text-orange-500 text-sm p-3 font-extrabold">
        To enlarge image, click and hold the image for make it appear bigger and wider
      </span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import logout from './logout.vue'
// import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { getFirestore, doc, getDoc } from 'firebase/firestore' // Import Firestore functions
// import { initFlowbite } from 'flowbite' // Import Flowbite initialization
import { auth } from '../../../../services/engine.mjs' // Import the Firebase auth object

export default {
  components: {
    logout
  },
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
      // initFlowbite()

      // Fetch user details after initializing Flowbite
      fetchUserDetails()
    })

    return {
      userDetails
    }
  }
}
</script>

<style scoped></style>
