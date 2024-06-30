<template>
  <div>
    <div class="charts">
      <div class="flex flex-col gap-5 mb-4">
        <div class="text-lg p-2 items-center font-extrabold flex">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2"
          >
            <path
              d="M15.4498 3.7803C15.4098 4.0303 15.3898 4.2803 15.3898 4.5303C15.3898 6.7803 17.2098 8.5993 19.4498 8.5993C19.6998 8.5993 19.9398 8.5703 20.1898 8.5303V16.5993C20.1898 19.9903 18.1898 22.0003 14.7898 22.0003H7.40076C3.99976 22.0003 1.99976 19.9903 1.99976 16.5993V9.2003C1.99976 5.8003 3.99976 3.7803 7.40076 3.7803H15.4498ZM15.6508 9.8603C15.3798 9.8303 15.1108 9.9503 14.9498 10.1703L12.5308 13.3003L9.75976 11.1203C9.58976 10.9903 9.38976 10.9393 9.18975 10.9603C8.99076 10.9903 8.81076 11.0993 8.68975 11.2593L5.73076 15.1103L5.66976 15.2003C5.49976 15.5193 5.57976 15.9293 5.87976 16.1503C6.01976 16.2403 6.16976 16.3003 6.33976 16.3003C6.57076 16.3103 6.78976 16.1893 6.92976 16.0003L9.43975 12.7693L12.2898 14.9103L12.3798 14.9693C12.6998 15.1393 13.0998 15.0603 13.3298 14.7593L16.2198 11.0303L16.1798 11.0503C16.3398 10.8303 16.3698 10.5503 16.2598 10.3003C16.1508 10.0503 15.9098 9.8803 15.6508 9.8603ZM19.5899 2C20.9199 2 21.9999 3.08 21.9999 4.41C21.9999 5.74 20.9199 6.82 19.5899 6.82C18.2599 6.82 17.1799 5.74 17.1799 4.41C17.1799 3.08 18.2599 2 19.5899 2Z"
              fill="#4062FF"
            />
          </svg>
          <h3 class="">All Transactions</h3>
        </div>
        <div class="transactions">
          <div class="transaction flex flex-align-center flex-justify-between mb-4">
            <div class="flex flex-align-center flex-justify-between">
              <svg
                width="48"
                height="48"
                viewBox="20 20 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2"
              >
                <g filter="url(#filter0_d_1_55)">
                  <rect x="20" y="20" width="48" height="48" rx="16" fill="#EF8E19" />
                </g>
                <path
                  d="M40.25 51.5V53.375C40.25 53.582 40.418 53.75 40.625 53.75H42.125C42.2245 53.75 42.3198 53.7105 42.3902 53.6402C42.4605 53.5698 42.5 53.4745 42.5 53.375V51.5H43.25V53.375C43.25 53.582 43.418 53.75 43.625 53.75H45.125C45.2245 53.75 45.3198 53.7105 45.3902 53.6402C45.4605 53.5698 45.5 53.4745 45.5 53.375V51.5H45.626C48.614 51.5 50.75 49.9505 50.75 47.27C50.75 45.017 49.2395 43.7855 47.471 43.61V43.478C48.926 43.115 49.9955 42.017 49.9955 40.193C49.9955 37.895 48.2705 36.5 45.638 36.5H45.5V34.625C45.5 34.5255 45.4605 34.4302 45.3902 34.3598C45.3198 34.2895 45.2245 34.25 45.125 34.25H43.625C43.5255 34.25 43.4302 34.2895 43.3598 34.3598C43.2895 34.4302 43.25 34.5255 43.25 34.625V36.5H42.3905V34.625C42.3905 34.5255 42.351 34.4302 42.2807 34.3598C42.2103 34.2895 42.115 34.25 42.0155 34.25H40.625C40.5255 34.25 40.4302 34.2895 40.3598 34.3598C40.2895 34.4302 40.25 34.5255 40.25 34.625V36.5L37.253 36.5165C37.1535 36.5165 37.0582 36.556 36.9878 36.6263C36.9175 36.6967 36.878 36.792 36.878 36.8915V38.375C36.878 38.5805 37.043 38.75 37.25 38.75L38.3825 38.7425C38.6796 38.7445 38.9638 38.8639 39.1732 39.0746C39.3825 39.2854 39.5 39.5704 39.5 39.8675V48.125C39.5 48.4234 39.3815 48.7095 39.1705 48.9205C38.9595 49.1315 38.6734 49.25 38.375 49.25L37.253 49.2665C37.1535 49.2665 37.0582 49.306 36.9878 49.3763C36.9175 49.4467 36.878 49.542 36.878 49.6415V51.1415C36.878 51.3485 37.046 51.5165 37.253 51.5165L40.25 51.5ZM42.3905 38.7305H44.969C46.328 38.7305 47.126 39.4775 47.126 40.6985C47.126 42.005 46.2635 42.7415 44.3105 42.7415H42.3905V38.7305ZM42.3905 44.807H45.1505C46.856 44.807 47.7845 45.677 47.7845 47.093C47.7845 48.5225 46.8455 49.268 44.5475 49.268H42.3905V44.8085V44.807Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_d_1_55"
                    x="0"
                    y="0"
                    width="88"
                    height="88"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.5586 0 0 0 0 0.560629 0 0 0 0 0.57 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_55"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_55"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div>
                <p class="text-bold">Bitcoin Buy</p>
                <small class="text-bold text-gray-500">Today</small>
              </div>
            </div>
            <p class="text-bold text-yellow-400 capitalize">pending</p>
          </div>
          <div class="transaction flex flex-align-center flex-justify-between mb-4">
            <div class="flex flex-align-center flex-justify-between">
              <svg
                width="48"
                height="48"
                viewBox="20 20 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2"
              >
                <g filter="url(#filter0_d_117_77)">
                  <rect x="20" y="20" width="48" height="48" rx="16" fill="#636890" />
                </g>
                <path
                  d="M52.8406 43.5407L44.5906 33.0407C44.5205 32.9511 44.4308 32.8786 44.3285 32.8287C44.2262 32.7788 44.1138 32.7529 44 32.7529C43.8862 32.7529 43.7738 32.7788 43.6715 32.8287C43.5692 32.8786 43.4795 32.9511 43.4094 33.0407L35.1594 43.5407C35.0544 43.6708 34.9971 43.8329 34.9971 44.0001C34.9971 44.1672 35.0544 44.3294 35.1594 44.4594L43.4094 54.9594C43.4795 55.0491 43.5692 55.1216 43.6715 55.1714C43.7738 55.2213 43.8862 55.2472 44 55.2472C44.1138 55.2472 44.2262 55.2213 44.3285 55.1714C44.4308 55.1216 44.5205 55.0491 44.5906 54.9594L52.8406 44.4594C52.9456 44.3294 53.0029 44.1672 53.0029 44.0001C53.0029 43.8329 52.9456 43.6708 52.8406 43.5407ZM44.75 35.6657L51.0687 43.7094L44.75 46.5876V35.6657ZM43.25 46.5876L36.9312 43.7094L43.25 35.6657V46.5876ZM43.25 48.2376V52.3344L38.2437 45.9594L43.25 48.2376ZM44.75 48.2376L49.7562 45.9594L44.75 52.3344V48.2376Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_d_117_77"
                    x="0"
                    y="0"
                    width="88"
                    height="88"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.5586 0 0 0 0 0.560629 0 0 0 0 0.57 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_117_77"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_117_77"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div>
                <p class="text-bold">Ethereum Sell</p>
                <small class="text-bold text-gray-500">2 days ago</small>
              </div>
            </div>
            <p class="text-bold text-error">rejected</p>
          </div>
          <div class="transaction flex flex-align-center flex-justify-between mb-4">
            <div class="flex flex-align-center flex-justify-between">
              <svg
                width="48"
                height="48"
                viewBox="20 20 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2"
              >
                <g filter="url(#filter0_d_117_77)">
                  <rect x="20" y="20" width="48" height="48" rx="16" fill="#636890" />
                </g>
                <path
                  d="M52.8406 43.5407L44.5906 33.0407C44.5205 32.9511 44.4308 32.8786 44.3285 32.8287C44.2262 32.7788 44.1138 32.7529 44 32.7529C43.8862 32.7529 43.7738 32.7788 43.6715 32.8287C43.5692 32.8786 43.4795 32.9511 43.4094 33.0407L35.1594 43.5407C35.0544 43.6708 34.9971 43.8329 34.9971 44.0001C34.9971 44.1672 35.0544 44.3294 35.1594 44.4594L43.4094 54.9594C43.4795 55.0491 43.5692 55.1216 43.6715 55.1714C43.7738 55.2213 43.8862 55.2472 44 55.2472C44.1138 55.2472 44.2262 55.2213 44.3285 55.1714C44.4308 55.1216 44.5205 55.0491 44.5906 54.9594L52.8406 44.4594C52.9456 44.3294 53.0029 44.1672 53.0029 44.0001C53.0029 43.8329 52.9456 43.6708 52.8406 43.5407ZM44.75 35.6657L51.0687 43.7094L44.75 46.5876V35.6657ZM43.25 46.5876L36.9312 43.7094L43.25 35.6657V46.5876ZM43.25 48.2376V52.3344L38.2437 45.9594L43.25 48.2376ZM44.75 48.2376L49.7562 45.9594L44.75 52.3344V48.2376Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_d_117_77"
                    x="0"
                    y="0"
                    width="88"
                    height="88"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.5586 0 0 0 0 0.560629 0 0 0 0 0.57 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_117_77"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_117_77"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div>
                <p class="text-bold">Ethereum Buy</p>
                <small class="text-bold text-gray-500">3 days ago</small>
              </div>
            </div>
            <p class="text-bold text-success">completed</p>
          </div>
        </div>
      </div>
      <canvas id="myChart"></canvas>
    </div>
  </div>
  <div>
    <h2>Transaction List</h2>
    <ul>
      <li v-for="(transaction, index) in transactions" :key="index">
        <div class="transaction-item">
          <div class="transaction-image">
            <img :src="transaction.imageUrl" alt="Transaction Image" />
          </div>
          <div class="transaction-details">
            <p><strong>Full Name:</strong> {{ transaction.fullName }}</p>
            <p><strong>Email:</strong> {{ transaction.email }}</p>
            <p><strong>Phone Number:</strong> {{ transaction.phoneNumber }}</p>
            <p><strong>Bank Name:</strong> {{ transaction.bankName }}</p>
            <p><strong>Account Number:</strong> {{ transaction.accountNumber }}</p>
            <p><strong>Account Name:</strong> {{ transaction.accountName }}</p>
            <p><strong>Amount:</strong> {{ transaction.amount }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

export default {
  setup() {
    const transactions = ref([]) // Initialize an empty array to store transactions

    const fetchTransactions = async () => {
      const db = getFirestore()
      const transactionsCollection = collection(db, 'transactions')

      try {
        const querySnapshot = await getDocs(transactionsCollection)
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          // Push the data to the 'transactions' array
          // console.log(data)
          transactions.value.push(data)
        })
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    // Fetch transactions when the component is mounted
    onMounted(() => {
      fetchTransactions()
    })

    return {
      transactions
    }
  }
}
</script>

<style scoped></style>
