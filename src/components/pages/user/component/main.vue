<template>
  <div class="p-4 md:ml-64 h-auto pt-20">
    <main class="flex">
      <section class="section__main">
        <Dsection />
        <div class="flex gap-5 mb-8">
          <router-link to="/transact">
            <button class="button bg-orange-700 text-white flex flex-align-center px-4 py-4">
              <svg
                width="8"
                height="12"
                viewBox="0 0 12 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2"
              >
                <path
                  d="M5.99339 7.83503C7.46503 7.83503 8.80668 7.92121 9.68129 8.05103C9.6835 8.05305 9.70532 8.05804 9.7421 8.06561L9.99273 8.11578C10.3127 8.18079 10.7934 8.28643 11.0086 8.39793C11.6211 8.71539 12 9.33611 12 10.0005V10.0583C11.9857 10.4914 11.6057 11.4012 11.5924 11.4012C10.9502 12.9317 8.95319 15.9491 7.62585 17.1622L7.58042 17.207C7.48045 17.3048 7.23713 17.5377 7.07178 17.6531C6.76556 17.8844 6.38663 18 6.00771 18C5.58473 18 5.19148 17.8702 4.86984 17.6247C4.81146 17.5669 4.56471 17.3509 4.35983 17.148C3.07656 15.9644 0.978153 12.8739 0.335965 11.2572C0.233523 11.0117 0.0154213 10.391 0 10.0583C0 9.74083 0.0738021 9.43756 0.219203 9.14847C0.422985 8.78738 0.74463 8.49939 1.12355 8.34012C1.38572 8.23866 2.17331 8.07939 2.18763 8.07939C3.04792 7.92121 4.44685 7.83503 5.99339 7.83503ZM6.00044 0C6.8387 0 7.51834 0.673083 7.51834 1.50325L7.19119 5.20248C7.19119 5.85375 6.65805 6.38174 6.00044 6.38174C5.34173 6.38174 4.80969 5.85375 4.80969 5.20248L4.48254 1.50325C4.48254 0.673083 5.16218 0 6.00044 0Z"
                  fill="white"
                />
              </svg>
              <span>Sell Gift Card</span>
            </button>
          </router-link>
          <button
            target="_blank"
            data-modal-target="default-modal"
            data-modal-toggle="default-modal"
            type="button"
            class="font-extrabold bg-white border-2 border-orange-600 border-solid rounded-2xl text-orange-700 flex items-center px-4 py-4"
          >
            <svg
              width="8"
              height="12"
              viewBox="0 0 12 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2"
            >
              <path
                d="M6.3607 10.1634L6.00661 10.165C4.53497 10.165 3.19332 10.0788 2.31871 9.94897L1.77483 9.83524C1.48678 9.77197 1.1588 9.68879 0.991371 9.60207C0.378924 9.28461 0 8.66389 0 7.99954V7.94172C0.0143198 7.50864 0.394346 6.59883 0.407564 6.59883C1.02183 5.13485 2.87572 2.31046 4.19739 1.006L4.59419 0.626929C4.70173 0.527664 4.82901 0.41614 4.92822 0.346905C5.23444 0.115635 5.61337 0 5.99229 0C6.41527 0 6.80852 0.129817 7.13016 0.375268L7.55047 0.764728L7.64017 0.85199C8.92344 2.03561 11.0218 5.12612 11.664 6.74283L11.7576 6.98692C11.8629 7.28064 11.9884 7.69218 12 7.94172C12 8.25917 11.9262 8.56244 11.7808 8.85153C11.577 9.21262 11.2554 9.50061 10.8764 9.65988C10.6143 9.76134 9.82669 9.92061 9.81237 9.92061C9.01826 10.0666 7.76518 10.1513 6.3607 10.1634ZM5.99956 18C5.1613 18 4.48166 17.3269 4.48166 16.4967L4.80881 12.7975C4.80881 12.1463 5.34195 11.6183 5.99956 11.6183C6.65827 11.6183 7.19031 12.1463 7.19031 12.7975L7.51746 16.4967C7.51746 17.3269 6.83782 18 5.99956 18Z"
                fill="rgb(208 56 1 / var(--tw-border-opacity))"
              />
            </svg>
            <span>Sell Crypto</span>
          </button>

          <!-- Main modal -->
          <div
            id="default-modal"
            tabindex="-1"
            aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative w-full max-w-2xl max-h-full">
              <!-- Modal content -->
              <div class="relative rounded-lg shadow bg-white">
                <!-- Modal header -->
                <div
                  class="flex items-start justify-between p-4 border-b rounded-t border-gray-600"
                >
                  <h3 class="text-xl font-semibold text-gray-900">How this works!</h3>
                  <button
                    type="button"
                    class="text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600"
                    data-modal-hide="default-modal"
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                  <p class="text-base leading-relaxed text-gray-500 text-bold">
                    Our current exchange rate for Bitcoin (BTC) is 1128.92/$"
                  </p>
                  <!-- <p class="text-base leading-relaxed text-gray-500">
                    To complete your BTC sale, kindly transfer the precise amount of Bitcoin you
                    wish to sell to the designated wallet address provided below or scan the QR code
                    displayed. Once the BTC transfer is initiated, please proceed to submit your
                    proof of payment and account details for remittance by clicking the 'Confirm
                    Payment' button, which will seamlessly redirect you to our customer care portal.
                    Your payment will be promptly processed for your convenience.
                  </p> -->
                </div>
                <!-- <div class="flex mx-auto justify-center items-center">
                  <img class=" " src="../../../../assets/image/qrcode.jpg" alt="" />
                </div> -->
                <div class="px-2 flex flex-col items-center py-5 text-center justify-center">
                  <p class="font-extrabold capitalize">wallet address:</p>
                  <p class="text-gray-700">16eZ37F3gdZYz4eHJKfFDyrTKV7u28K4Ud</p>
                </div>
               <cryptoForm/>
                <!-- Modal footer -->
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <div class="mt-6">
            <h6 class="text-[#212121] text-lg">Giftcards we buy:</h6>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mt-6">
            <a class="bg-[#FBFBFB] rounded-md py-4 px-3 cursor-pointer"
              ><div class="flex justify-center">
                <div class="w-[100px] h-[100px] flex justify-center items-center">
                  <img
                    class="rounded-xl"
                    src="../../../../assets/image/walmart.png"
                    alt="card send"
                  />
                </div>
              </div>
              <div class="mt-2 text-center">
                <p class="text-[#212121[ text-sm">wallingmart</p>
              </div></a
            >
            <a class="bg-[#FBFBFB] rounded-md py-4 px-3 cursor-pointer"
              ><div class="flex justify-center">
                <div class="w-[100px] h-[100px] flex justify-center items-center">
                  <img src="../../../../assets/image/itunes.png" alt="card send" />
                </div>
              </div>
              <div class="mt-2 text-center">
                <p class="text-[#212121[ text-sm">iTunes</p>
              </div></a
            >
            <a class="bg-[#FBFBFB] rounded-md py-4 px-3 cursor-pointer"
              ><div class="flex justify-center">
                <div class="w-[100px] h-[100px] flex justify-center items-center">
                  <img src="../../../../assets/image/amazon.png" alt="card send" />
                </div>
              </div>
              <div class="mt-2 text-center">
                <p class="text-[#212121[ text-sm">Amazon</p>
              </div></a
            >
            <a class="bg-[#FBFBFB] rounded-md py-4 px-3 cursor-pointer"
              ><div class="flex justify-center">
                <div class="w-[100px] h-[100px] flex justify-center items-center">
                  <img src="../../../../assets/image/steam.png" alt="card send" />
                </div>
              </div>
              <div class="mt-2 text-center">
                <p class="text-[#212121] text-sm">steam card</p>
              </div></a
            >
            <a class="bg-[#FBFBFB] rounded-md py-4 px-3 cursor-pointer"
              ><div class="flex justify-center">
                <div class="w-[100px] h-[100px] flex justify-center items-center">
                  <img src="../../../../assets/image/ebay.png" alt="card send" />
                </div>
              </div>
              <div class="mt-2 text-center">
                <p class="text-[#212121] text-sm">ebay</p>
              </div></a
            >
          </div>
        </div>
        <transaction />
      </section>
    </main>
  </div>
</template>

<script setup>
import transaction from './transactions.vue'
import Dsection from './section.vue'
import cryptoForm from './cryptoForm.vue'
</script>
