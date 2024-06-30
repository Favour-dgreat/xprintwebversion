<template>
  <aside
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 "
    aria-label="Sidenav"
    id="drawer-navigation"
  >
    <div class="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-orange-800">
      <ul class="space-y-2 justify-center items-start h-[80vh] flex flex-col gap-10">
        <div>
          <router-link to="/dashboard">
            <li>
              <a
                class="flex items-center p-2 text-base font-medium text-orange-900 rounded-lg dark:text-white hover:bg-orange-100 dark:hover:bg-orange-700 group"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z"
                    fill="rgb(138 44 13 / var(--tw-text-opacity))"
                  />
                </svg>
                <span class="ml-3">Dashboard</span>
              </a>
            </li></router-link
          >
        </div>
        <div>
          <router-link to="/transact">
            <li>
              <a
                class="flex items-center p-2 text-base font-medium text-orange-900 rounded-lg dark:text-white hover:bg-orange-100 dark:hover:bg-orange-700 group"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.3 12.8294C18.5124 12.8294 19.6102 12.8983 20.2855 13.0265C20.296 13.0265 20.9139 13.1536 21.1199 13.2356C21.4172 13.3639 21.6688 13.5955 21.8291 13.8853C21.9438 14.1169 22 14.3616 22 14.617C21.9895 14.883 21.8174 15.3831 21.7367 15.5802C21.2346 16.8797 19.5868 19.3633 18.5815 20.3158C18.4211 20.4774 18.2269 20.652 18.1812 20.6983C17.9284 20.8955 17.6206 21 17.2894 21C16.991 21 16.6937 20.9074 16.4538 20.7209C16.3292 20.6318 16.1473 20.4545 16.0641 20.3715L16.0196 20.3265C14.978 19.3526 13.4121 16.926 12.9089 15.6955C12.8982 15.6955 12.6475 15.0816 12.5968 14.7113L12.5882 14.617V14.5706C12.5882 14.0361 12.8855 13.5373 13.3665 13.2819C13.6298 13.1429 14.3952 13.0147 14.4069 13.0028C15.0927 12.8983 16.1449 12.8294 17.3 12.8294ZM6.70553 12.8905C7.18478 12.8905 7.57926 13.2561 7.63317 13.7277L7.63945 13.8383L7.89575 18.4171C7.89575 19.0846 7.36325 19.625 6.70553 19.625C6.08892 19.625 5.58133 19.15 5.52029 18.5406L5.51414 18.4171L5.77161 13.8383C5.77161 13.3146 6.18942 12.8905 6.70553 12.8905ZM6.71173 3C7.00783 3 7.30509 3.09264 7.54618 3.27793C7.65004 3.35291 7.79368 3.48866 7.88681 3.57993L7.98037 3.67345C9.02079 4.64858 10.5879 7.07394 11.0911 8.30444C11.1007 8.30444 11.3523 8.91922 11.4032 9.28974L11.4118 9.38409V9.43041C11.4118 9.96371 11.1133 10.4626 10.6335 10.7179C10.3702 10.8581 9.60478 10.9852 9.59308 10.997C8.90727 11.1016 7.85514 11.1704 6.70003 11.1704C5.48757 11.1704 4.38981 11.1016 3.71453 10.9733C3.70282 10.9733 3.08606 10.8462 2.88009 10.7642C2.58282 10.6372 2.3312 10.4044 2.17087 10.1145C2.05618 9.88294 2 9.63827 2 9.38409C2.01053 9.11685 2.18257 8.618 2.26215 8.42083C2.76539 7.12026 4.41204 4.6367 5.41852 3.68532C5.57886 3.5226 5.77313 3.34801 5.81877 3.30169C6.07039 3.10452 6.37936 3 6.71173 3ZM17.2947 4.375C17.9113 4.375 18.4179 4.84999 18.4788 5.45938L18.4849 5.58295L18.2286 10.1618C18.2286 10.6856 17.8108 11.1096 17.2947 11.1096C16.8155 11.1096 16.421 10.744 16.3671 10.2724L16.3608 10.1618L16.1033 5.58295C16.1033 4.91543 16.637 4.375 17.2947 4.375Z"
                    fill="rgb(138 44 13 / var(--tw-text-opacity))"
                  />
                </svg>
                <span class="ml-3">Transact Now</span>
              </a>
            </li></router-link
          >
        </div>
        <div>
          <router-link to="/settings">
            <li>
              <a
                class="flex items-center p-2 text-base font-medium text-orange-900 rounded-lg transition duration-75 hover:bg-orange-100 dark:hover:bg-orange-700 dark:text-white group"
              >
                <svg
                  class="w-6 h-6 text-orange-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"
                  />
                </svg>
                <span class="ml-3">Settings</span>
              </a>
            </li></router-link
          >
        </div>
        <div>
          <router-link to="/profile">
            <li>
              <a
                class="flex items-center p-2 text-base font-medium text-orange-900 rounded-lg transition duration-75 hover:bg-orange-100 dark:hover:bg-orange-700 dark:text-white group"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15.1739C16.3386 15.1739 20 15.8789 20 18.599C20 21.32 16.3146 22 12 22C7.66237 22 4 21.295 4 18.575C4 15.8539 7.68538 15.1739 12 15.1739ZM12 2C14.9391 2 17.294 4.35402 17.294 7.29105C17.294 10.2281 14.9391 12.5831 12 12.5831C9.0619 12.5831 6.70601 10.2281 6.70601 7.29105C6.70601 4.35402 9.0619 2 12 2Z"
                    fill="rgb(138 44 13 / var(--tw-text-opacity))"
                  />
                </svg>
                <span class="ml-3">Profile</span>
              </a>
            </li></router-link
          >
        </div>
        <div @click="logoutUser">
          <li>
            <a
              class="flex items-center p-2 text-base font-medium text-red-600 rounded-lg transition duration-75 hover:bg-orange-100 dark:hover:bg-orange-700 dark:text-white group"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4927 2C13.9753 2 16 3.99 16 6.44V11.23H9.89535C9.45785 11.23 9.11192 11.57 9.11192 12C9.11192 12.42 9.45785 12.77 9.89535 12.77H16V17.55C16 20 13.9753 22 11.4724 22H6.51744C4.02471 22 2 20.01 2 17.56V6.45C2 3.99 4.03488 2 6.52762 2H11.4927ZM18.5402 8.5502C18.8402 8.2402 19.3302 8.2402 19.6302 8.5402L22.5502 11.4502C22.7002 11.6002 22.7802 11.7902 22.7802 12.0002C22.7802 12.2002 22.7002 12.4002 22.5502 12.5402L19.6302 15.4502C19.4802 15.6002 19.2802 15.6802 19.0902 15.6802C18.8902 15.6802 18.6902 15.6002 18.5402 15.4502C18.2402 15.1502 18.2402 14.6602 18.5402 14.3602L20.1402 12.7702H16.0002V11.2302H20.1402L18.5402 9.6402C18.2402 9.3402 18.2402 8.8502 18.5402 8.5502Z"
                  fill="rgb(224 36 36 / var(--tw-text-opacity))"
                />
              </svg>
              <span class="ml-3">Logout</span>
            </a>
          </li>
        </div>
      </ul>
    </div>
  </aside>
  <div></div>
</template>

<script>
import { ref } from 'vue'
import { getAuth, signOut } from 'firebase/auth'
import { onMounted, onBeforeUnmount } from 'vue'
import { initFlowbite } from 'flowbite'
import { useRouter } from 'vue-router' // Import the useRouter function from vue-router

export default {
  setup() {
    const router = useRouter() // Create a router instance

    onMounted(() => {
      // Initialize Flowbite
      initFlowbite()

      // Fetch user details after initializing Flowbite
    })

    const logoutUser = () => {
      const auth = getAuth() // Replace with your Firebase authentication instance

      signOut(auth)
        .then(() => {
          // Logout successful
          console.log('User logged out')
          localStorage.clear('ActiveUser')
          router.push('/login') // Use router.push to navigate to the login page
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
      logoutUser,
    }
  }
}
</script>


<style scoped></style>
