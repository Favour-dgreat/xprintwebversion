<template>
  <div>
    <div
      class="bg-orange-700 flex text-left items-start place-items-start py-12 max-w-4xl mb-5 px-3 rounded-3xl"
    >
      <div>
        <h1 class="text-2xl text-white font-extrabold mb-2">Welcome,</h1>
        <h1 class="text-xl text-white mb-4">{{ userDetails.fullName }}</h1>
        <div class="">
          <router-link to="/transact">
            <button
              class="rounded-xl bg-white border-solid border-orange-700 border-2 text-orange-700 font-extrabold py-2 px-6"
            >
              Tansact
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
// import { getAuth, signOut } from 'firebase/auth'
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

    return {
      userDetails
    }
  }
}
</script>
<style scoped></style>
