<template>
  <div>
    <input type="email" name="" id="" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { emailRules, requiredRule, passwdRules, phoneRules, agree } from '@/services/rules.js'
import { authfunc, crud } from '@/services/index'
const checkPassword = [
  (v) => !!v || 'Password confirmation is required',
  (v) => v === password.value || 'Passwords do not match'
]
const visible = ref(false)
const loading = ref(false)
const fullName = ref('')
const address = ref('')
const number = ref('')
const email = ref('')
const errorMessage = ref('')
const password = ref('')
const confirmPassword = ref('')
const checkbox = ref(false)

const isFormValid = computed(() => {
  return !(
    emailRules.every((rule) => rule(email) === true) &&
    passwdRules.every((rule) => rule(password) === true) &&
    checkPassword.every((rule) => rule(confirmPassword) === true) &&
    agree.every((rule) => rule(checkbox) === true)
  )
})
// Retrieve the userType from local storage
const regType = localStorage.getItem('regType') /*|| 'client'*/
async function createAccount() {
  if (!isFormValid.value) {
    loading.value = false
    return
  } else {
    try {
      let data = {
        email: email.value,
        phone: number.value,
        fullName: fullName.value,
        address: address.value,
        account: regType
      }
      loading.value = true
      const res = await authfunc.signup(email.value, password.value)
      if (res) {
        await crud.addDocWithId('users', res.user.uid, data)
        loading.value = false
        this.$router.push({ path: '/' })
        alert('user created')
      }
    } catch (err) {
      loading.value = false
      if ((err.message = 'Firebase: Error (auth/email-already-in-use).')) {
        errorMessage.value = 'email already in use...'
      }
      console.log(err)
    }
    return {
      errorMessage
    }
  }
}
</script>

<style scoped></style>
