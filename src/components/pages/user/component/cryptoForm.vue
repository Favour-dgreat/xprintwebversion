<template>
  <form @submit="submitForm" class="px-5">
    <div class="grid md:grid-cols-2 md:gap-6">
      <!-- <div class="relative z-0 w-full mb-6 group">
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
                        >
                      </label>
                    </div> -->
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
          >BTC amount in Dollars ($)
        </label>
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
          >upload proof of BTC transfer
        </label>
      </div>
    </div>
    <div class="grid md:grid-cols-2 md:gap-6">
      <!-- <div class="relative z-0 w-full mb-6 group">
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
                    </div> -->
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
    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
      <button
        @click="submitForm"
        :disabled="loading"
        type="button"
        class="text-white px-4 py-2 bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-800"
      >
        <span v-if="loading">Loading, please wait...</span>
        <span v-else>Submit request.</span>
      </button>
    </div>
  </form>
  <div v-if="showSuccessMessage" class=" p-3 text-xl font-extrabold text-green-600 mt-2">
        Order sent! check transaction list for the status of your transaction..
      </div>
</template>

<script>
import { UploadImg, crud } from '../../../../services/index.mjs'
import axios from 'axios'

export default {
  data() {
    return {
      //   email: '',
      fullName: 'sell BTC',
    //   phoneNumber: '',
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
          //   email: this.email,
          // phoneNumber: this.phoneNumber,
          bankName: this.bankName,
          accountNumber: this.accountNumber,
          accountName: this.accountName,
          amount: this.amount,
          imageUrl: this.image.url,
          status: 'pending'
        })
        this.transactionId = resp.id
        // console.log(resp)

        const sendLink = await axios.get(`https://xprintxchange.onrender.com/sendForward`, {
          params: {
            email: this.email,
            phoneNumber: this.phoneNumber,
            fullName: this.fullName,
            // phoneNumber: this.phoneNumber,
            bankName: this.bankName,
            accountNumber: this.accountNumber,
            accountName: this.accountName,
            amount: this.amount,
            image: this.image.url
          }
        })
        this.showSuccessMessage = true
        // alert('order sent!')
        this.fullName = ''
        this.email = ''
        // this.phoneNumber = ''
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
