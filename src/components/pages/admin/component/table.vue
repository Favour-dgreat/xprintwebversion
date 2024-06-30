<template>
  <div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="p-4 capitalize">image</th>
          <th scope="col" class="p-4 capitalize">gift card name</th>
          <th scope="col" class="p-4 capitalize">amount</th>
          <th scope="col" class="p-4 capitalize">bank name</th>
          <th scope="col" class="p-4 capitalize">account number</th>
          <th scope="col" class="p-4 capitalize">account name</th>
          <th scope="col" class="p-4 capitalize">phone number</th>
          <th scope="col" class="p-4 capitalize">transaction ID</th>
          <th scope="col" class="p-4 capitalize">user ID</th>
          <th scope="col" class="p-4 capitalize">status</th>
          <th scope="col" class="p-4 capitalize">Action</th>
        </tr>
      </thead>
      <tbody v-for="(transaction, index) in transactions" :key="index">
        <tr class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
          <td class="p-4 w-4">
            <button>
              <img
                :src="transaction.image"
                alt="gift card Image"
                class="hover:absolute hover:left-1 hover:top-1 hover:h-[300px] hover:w-[300px]"
              />
            </button>
          </td>
          <th
            scope="row"
            class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            <div class="flex items-center mr-3">
              <div>
                {{ transaction.fullName }}
              </div>
            </div>
          </th>
          <td class="px-4 py-3">
            <span
              class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300"
            >
              {{ transaction.amount }}</span
            >
          </td>
          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <div class="flex items-center">{{ transaction.bankName }}</div>
          </td>
          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ transaction.accountNumber }}
          </td>
          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{ transaction.accountName }}
          </td>
          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <div class="flex items-center">
              <span class="text-gray-500 dark:text-gray-400 ml-1">08169066040</span>
            </div>
          </td>
          <td class="px-4 py-3">{{ transaction.id }}</td>
          <td class="px-4 py-3">{{ transaction.userId }}</td>
          <td
            :class="
              transaction.status === 'completed'
                ? 'text-green-400'
                : transaction.status === 'rejected'
                ? 'text-red-600'
                : 'text-yellow-300'
            "
            class="px-4 font-extrabold capitalize py-3"
          >
            {{ transaction.status }}
          </td>
          <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <div>
              <div class="flex items-center space-x-4">
                <button
                  @click="markTransactionAsRejected(transaction)"
                  type="button"
                  class="py-2 px-3 flex items-center text-sm font-medium text-center text-red-400 bg-white rounded-lg hover:bg-red-800 hover:text-white capitalize border-solid border-red-700 border-2 focus:ring-4 focus:outline-none focus:ring-red-300 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  reject
                </button>
                <button
                  type="button"
                  @click="markTransactionAsCompleted(transaction)"
                  class="py-2 px-3 flex items-center text-sm font-medium text-center capitalize text-green-500 focus:outline-none bg-white rounded-lg border border-green-500 hover:bg-green-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-green-200"
                >
                  completed
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from 'vue'
// import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { updateDoc, getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore'
import { initFlowbite } from 'flowbite'

// import { auth } from '../../../../services/engine.mjs'

export default {
  setup() {
    const router = useRouter()
    const userDetails = ref({
      email: '',
      fullName: ''
    })
    const transactions = ref([]) // Initialize an empty array to store transactions

    async function fetchUserDetails() {
      // Your existing code to fetch user details
    }

    async function fetchTransactions() {
      const db = getFirestore()
      const transactionsCollection = collection(db, 'transactions')

      try {
        const querySnapshot = await getDocs(transactionsCollection)
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          const transaction = {
            id: doc.id,
            fullName: data.fullName,
            amount: data.amount,
            bankName: data.bankName,
            accountNumber: data.accountNumber,
            accountName: data.accountName,
            userId: data.userId,
            status: data.status,
            image: data.imageUrl
          }
          transactions.value.push(transaction)
        })
      } catch (error) {
        console.error('Error fetching transactions:', error)
      }
    }
    const markTransactionAsCompleted = async (transaction) => {
      try {
        // Update the status of the selected transaction to "completed"
        const db = getFirestore()
        const transactionRef = doc(db, 'transactions', transaction.id)

        await updateDoc(transactionRef, {
          status: 'completed'
        })

        // Update the local state to reflect the change
        transaction.status = 'completed'
      } catch (error) {
        console.error('Error marking transaction as completed:', error)
      }
    }

    const markTransactionAsRejected = async (transaction) => {
      try {
        // Update the status of the selected transaction to "rejected"
        const db = getFirestore()
        const transactionRef = doc(db, 'transactions', transaction.id)

        await updateDoc(transactionRef, {
          status: 'rejected'
        })

        // Update the local state to reflect the change
        transaction.status = 'rejected'
      } catch (error) {
        console.error('Error marking transaction as rejected:', error)
      }
    }
    onMounted(async () => {
      initFlowbite()
      await fetchUserDetails()
      await fetchTransactions()
    })

    const logoutUser = () => {
      // Your existing logout code
    }

    return {
      logoutUser,
      userDetails,
      transactions,
      markTransactionAsRejected,
      markTransactionAsCompleted
    }
  }
}
</script>
<style scoped></style>
