<template>
  <!-- component -->
  <body class="background">
    <nav class="relative px-4 py-4 flex justify-between items-center">
      <a class="text-3xl font-bold leading-none" href="#">
        <img class="h-10" alt="logo" src="../assets/image/logo.png" />
      </a>
      <div class="lg:hidden">
        <button class="navbar-burger flex items-center text-orange-600 p-3">
          <svg
            class="block h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <ul
        class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6"
      >
        <li>
          <router-link to="/">
            <a class="text-base text-orange-600 font-bold hover:text-gray-500" href="#"
              >Home</a
            ></router-link
          >
        </li>
        <li class="text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            class="w-4 h-4 current-fill"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>
        <li>
          <a class="text-base text-orange-800" href="https://www.instagram.com/xprintxchange/"
            >Social Proof</a
          >
        </li>
        <li class="text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            class="w-4 h-4 current-fill"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>
        <li>
            <a class="text-base text-orange-800 hover:text-gray-500" href="https://play.google.com/store/apps/details?id=app.vercel.app_xprint_xchange.twa&pcampaignid=web_share">Download Our Mobile App</a>
        </li>
        <li class="text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            class="w-4 h-4 current-fill"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>

        <li><a class="text-base text-orange-800 hover:text-gray-500" href="mailto:contact@xprintxchange.com">Send a Message</a></li>
      </ul>
      <div class="relative mr-3 md:mr-0 hidden md:block">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            class="w-5 h-5 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="email-adress-icon"
          class="bg-gray-50 border border-gray-800 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
          placeholder="Search..."
        />
      </div>
    </nav>
    <div class="navbar-menu relative z-50 hidden">
      <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav
        class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
      >
        <div class="flex items-center mb-8">
          <a class="mr-auto text-3xl font-bold leading-none" href="#">
            <img width="50px" src="../assets/image/logo.png" alt="" />
          </a>
          <button class="navbar-close">
            <svg
              class="h-6 w-6 text-orange-800 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li class="mb-1">
              <router-link to="/">
                <a
                  class="block p-4 text-sm font-semibold text-orange-800 hover:bg-orange-50 hover:text-orange-600 rounded"
                  href="#"
                  >Home</a
                ></router-link
              >
            </li>
            <li class="mb-1">
              <a
                class="block p-4 text-sm font-semibold text-orange-800 hover:bg-orange-50 hover:text-orange-600 rounded"
                href="https://www.instagram.com/xprintxchange/"
                >Social proof</a
              >
            </li>
            <li class="mb-1">
                <a
                  class="block p-4 text-sm font-semibold text-orange-800 hover:bg-orange-50 hover:text-orange-600 rounded"
                  href="https://play.google.com/store/apps/details?id=app.vercel.app_xprint_xchange.twa&pcampaignid=web_share"
                  >Download Our Mobile App</a
                >
            </li>

            <li class="mb-1">
                <a
                  class="block p-4 text-sm font-semibold text-orange-800 hover:text-orange-600 rounded"
                  href="mailto:contact@xprintxchange.com"
                  >Send a Message</a>
                
              
            </li>
            <li class="mb-1">
                <a href="https://app-xprint-xchange.vercel.app/"
                  class="block p-4 text-sm font-semibold text-white bg-orange-600 hover:text-orange-600 rounded-xl"
                  >Get Started</a
                >
            </li>
          </ul>
        </div>
        <!-- <div class="mt-auto">
          <div class="pt-6 bg-red-700">
            <div class="relative mr-3 md:mr-0 hidden md:block">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
             
            </div>
          </div>
        </div> -->
      </nav>
    </div>
  </body>
</template>
<script>
// Burger menus
document.addEventListener('DOMContentLoaded', function () {
  // open
  const burger = document.querySelectorAll('.navbar-burger')
  const menu = document.querySelectorAll('.navbar-menu')

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener('click', function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden')
        }
      })
    }
  }

  // close
  const close = document.querySelectorAll('.navbar-close')
  const backdrop = document.querySelectorAll('.navbar-backdrop')

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener('click', function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden')
        }
      })
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener('click', function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden')
        }
      })
    }
  }
})
</script>

<style scoped></style>