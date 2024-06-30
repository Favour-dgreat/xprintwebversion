<template>
  <div class="p-4 md:ml-64 h-auto pt-20">
    <div class="p-5 mx-auto sm:p-10 md:p-16 bg-[#fcd9bd] text-black">
      <div class="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <!-- <img
          src="https://source.unsplash.com/random/480x360"
          alt=""
          class="w-full h-20 sm:h-40 bg-orange-500"
        /> -->
        <div class="w-full h-20 sm:h-40 md:flex items-center bg-orange-700">
          <!-- <h1 class="text-7xl uppercase mb-10 mx-auto font-extrabold text-white">xprintxchange</h1> -->
        </div>
        <div
          class="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-white"
        >
          <div class="space-y-2">
            <div class="flex flex-col mx-auto justify-center items-center text-center">
              <svg
                class="w-20 h-20 text-orange-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
                />
              </svg>
              <div class="flex flex-col">
                <h4 class="text-2xl font-semibold">{{ userDetails.fullName }}</h4>
                <h4 class="text-lg mt-3 font-normal">{{ userDetails.userName }}</h4>
                <h4 class="text-lg mt-3 font-normal">{{ userDetails.email }}</h4>
                <h4 class="text-lg mt-3 font-normal">{{ userDetails.number }}</h4>
                <div>
                  <a
                    href="https://ig.me/m/xprintxchange"
                    class="relative px-7 py-1 my-2 overflow-hidden font-semibold rounded bg-orange-100 text-orange-900"
                  >
                    Talk to Us
                  </a>
                </div>
                <!-- <p class="text-orange-400">
                  Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula,
                  semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula
                  euismod lobortis ultricies et nibh.
                </p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
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

<style scoped></style>
