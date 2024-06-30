<template>
  <div class="bg-orange-200 min-h-screen p-10">
    <main class="p-4 md:ml-64 h-auto pt-5">
      <div>
        <div class="flex flex-col gap-4 mt-6">
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
          <div class="flex-1">
            <div class="mt-6">
              <h6 class="text-[#212121] text-lg">Sell your gift card to us:</h6>
            </div>
            <div class="bg-[#FBFBFB] mt-4 rounded-xl py-9 px-4">
              <div>
                <form @submit="submitForm">
                  <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        v-model="fullName"
                        name="cardName"
                        id="cardName"
                        class="block placeholder:capitalize py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="cardName"
                        class="peer-focus:font-medium capitalize placeholder:capitalize absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >enter giftcard Name
                      </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        v-model="amount"
                        name="amount"
                        id="amount"
                        class="block placeholder:capitalize py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=""
                        required
                      />
                      <label
                        for="account-number"
                        class="peer-focus:font-medium capitalize placeholder:capitalize absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Gift card Amount in Dollars ($)
                      </label>
                    </div>

                    <div v-if="showSuccessMessage" class="text-green-600 mt-2">
                      order sent! wait for an email response.
                    </div>

                    <div class="relative z-0 w-full mb-6 group">
                      <input
                        type="file"
                        @change="handleImageUpload"
                        accept="image/*"
                        name="floating_first_name"
                        id="floating_first_name"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="upload image of the giftcard "
                        required
                      />
                      <label
                        for="floating_first_name"
                        class="peer-focus:font-medium capitalize absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >upload image of the giftcard
                      </label>
                    </div>
                  </div>
                  <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                      <input
                        type="tel"
                        name="floating_phone"
                        id="floating_phone"
                        v-model="phoneNumber"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />

                      <label
                        for="floating_phone"
                        class="peer-focus:font-medium capitalize placeholder:capitalize absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Phone number
                      </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="bank_name"
                        id="bank_name"
                        v-model="bankName"
                        class="block py-2.5 px-0 w-full placeholder:capitalize text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        required
                      />
                      <label
                        for="bank_name"
                        class="peer-focus:font-medium capitalize placeholder:capitalize absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        bank Name.
                      </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="account-number"
                        id="account-number"
                        v-model="accountNumber"
                        class="block py-2.5 px-0 w-full placeholder:capitalize text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        required
                      />
                      <label
                        for="account-number"
                        class="peer-focus:font-medium capitalize placeholder:capitalize absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Account number.
                      </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="Account-name"
                        id="Account-name"
                        v-model="accountName"
                        class="block py-2.5 px-0 w-full placeholder:capitalize text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        required
                      />
                      <label
                        for="Account-name"
                        class="peer-focus:font-medium capitalize placeholder:capitalize absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Account name
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="rounded-xl bg-orange-700 text-white flex flex-align-center px-7 py-1"
                    @click="submitForm"
                    :disabled="loading"
                  >
                    <span v-if="loading">Loading...</span>
                    <span v-else>Submit</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { UploadImg, crud } from '../../../../services/index.mjs'
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      phoneNumber: '',
      bankName: '',
      accountNumber: '',
      accountName: '',
      amount: 0,
      image: null,
      transactionId: '',
      file: null,
      loading: false,
      showSuccessMessage: false
    }
  },
  methods: {
    async submitForm(event) {
      event.preventDefault()
      if (this.loading) return

      this.loading = true

      try {
        const res = await UploadImg(this.file, `transaction_images/${Date.now()}_${this.file.name}`)
        this.image = res
        const resp = await crud.addDocWithoutId('transactions', {
          fullName: this.fullName,
          userId: localStorage.getItem('ActiveUser'),
          transactionId: this.transactionId,
          email: this.email,
          phoneNumber: this.phoneNumber,
          bankName: this.bankName,
          accountNumber: this.accountNumber,
          accountName: this.accountName,
          amount: this.amount,
          imageUrl: this.image.url,
          status: 'pending',
        })
        this.transactionId = resp.id
        // console.log(resp)

        const sendLink = await axios.get(`https://xprintxchange.onrender.com/sendForward`, {
          params: {
            email: this.email,
            phoneNumber: this.phoneNumber,
            fullName: this.fullName,
            phoneNumber: this.phoneNumber,
            bankName: this.bankName,
            accountNumber: this.accountNumber,
            accountName: this.accountName,
            amount: this.amount,
            image: this.image.url
          }
        })
        this.showSuccessMessage = true
        alert('order sent!')
        this.fullName = ''
        this.email = ''
        this.phoneNumber = ''
        this.bankName = ''
        this.accountNumber = ''
        this.accountName = ''
        this.amount = 0
        this.image = null
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },
    async handleImageUpload(event) {
      this.file = event.target.files[0]
    }
  }
}
</script>

<style scoped></style>

<!-- <template>
  <div class="bg-orange-200 min-h-screen p-10">
    <main class="p-4 md:ml-64 h-auto pt-5">
      <div>
        <div class="flex flex-col gap-4 mt-6">
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
          <div class="flex-1">
            <div class="mt-6">
              <h6 class="text-[#212121] text-lg">Sell your gift card to us:</h6>
            </div>
            <div class="bg-[#FBFBFB] mt-4 rounded-xl py-4 px-4">
              <div>
                <form @submit="submitForm">
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      v-model="amount"
                      name="amount"
                      id="amount"
                      class="block placeholder:capitalize py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder="enter giftcard amount "
                      required
                    />
                  </div>

                  <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                      <input
                        type="file"
                        @change="handleImageUpload"
                        accept="image/*"
                        name="floating_first_name"
                        id="floating_first_name"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder="upload image of the giftcard "
                        required
                      />
                      <label
                        for="floating_first_name"
                        class="peer-focus:font-medium capitalize absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >upload image of the giftcard
                      </label>
                    </div>
                  </div>
                  <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                      <input
                        type="tel"
                        name="floating_phone"
                        id="floating_phone"
                        v-model="phoneNumber"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_phone"
                        class="peer-focus:font-medium capitalize absolute placeholder:capitalize text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Phone number</label
                      >
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="bank-name"
                        id="bank-name"
                        v-model="bankName"
                        class="block py-2.5 px-0 w-full placeholder:capitalize text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        required
                      />
                      <label
                        for="bank-name"
                        class="peer-focus:font-medium capitalize placeholder:capitalize absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        bank Name.
                      </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="account-number"
                        id="account-number"
                        v-model="accountNumber"
                        class="block py-2.5 px-0 w-full placeholder:capitalize text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        required
                      />
                      <label
                        for="account-number"
                        class="peer-focus:font-medium capitalize placeholder:capitalize absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Account number.
                      </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="Account-name"
                        id="Account-name"
                        v-model="accountName"
                        class="block py-2.5 px-0 w-full placeholder:capitalize text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        required
                      />
                      <label
                        for="Account-name"
                        class="peer-focus:font-medium capitalize placeholder:capitalize absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Account name
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="rounded-xl bg-orange-700 text-white flex flex-align-center px-7 py-1"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { getStorage, ref as storageRef, uploadString } from 'firebase/storage'

// import { db } from '../../../../services/engine.mjs'

export default {
  data() {
    return {
      fullName: '',
      email: '',
      phoneNumber: '',
      bankName: '',
      accountNumber: '',
      accountName: '',
      amount: 0,
      image: null
    }
  },
  methods: {
    async submitForm(event) {
      event.preventDefault()

      const storage = getStorage()
      const storageRef = storageRef(storage, storagePath)

      const storagePath = `transaction_images/${Date.now()}_${this.image.name}`
      await uploadString(storageRef, this.image, 'data_url')

      const db = getFirestore()
      const transactionRef = doc(db, 'transactions')

      await setDoc(transactionRef, {
        fullName: this.fullName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        bankName: this.bankName,
        accountNumber: this.accountNumber,
        accountName: this.accountName,
        amount: this.amount,
        imageUrl: storagePath
      })

      this.fullName = ''
      this.email = ''
      this.phoneNumber = ''
      this.bankName = ''
      this.accountNumber = ''
      this.accountName = ''
      this.amount = 0
      this.image = null
    },
    handleImageUpload(event) {
      this.image = event.target.files[0]
    }
  }
}
</script> -->
