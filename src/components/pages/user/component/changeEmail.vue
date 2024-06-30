<template>
  <div>this is the change email section</div>
</template>

<script>
export default {}
</script>

<style scoped></style>
<!-- <template>
  <div>
    <h1>Change Email</h1>
    <p>Your current email: {{ currentUser.email }}</p>

    <label for="newEmail">New Email:</label>
    <input v-model="newEmail" type="email" id="newEmail" required />

    <button @click="changeEmail" :disabled="changingEmail">Change Email</button>

    <p v-if="changeEmailError" class="error">{{ changeEmailError }}</p>

    <p v-if="changingEmail">Changing your email...</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getAuth, reauthenticateWithCredential, updateEmail } from 'firebase/auth'
import { EmailAuthProvider } from 'firebase/auth';

export default {
  setup() {
    const currentUser = ref(null)
    const newEmail = ref('')
    const changingEmail = ref(false)
    const changeEmailError = ref(null)

    const auth = getAuth()
    const user = auth.currentUser

    onMounted(() => {
      if (user) {
        currentUser.value = user
      }
    })

    const changeEmail = async () => {
      changingEmail.value = true
      changeEmailError.value = null

      // Reauthenticate the user (you can use their current password for reauthentication)
      const credential = EmailAuthProvider.credential(user.email)
      try {
        await reauthenticateWithCredential(user, credential)

        // Change the user's email
        await updateEmail(user, newEmail.value)

        console.log('Email changed successfully')
      } catch (error) {
        changeEmailError.value = error.message
      } finally {
        changingEmail.value = false
      }
    }

    return {
      currentUser,
      newEmail,
      changingEmail,
      changeEmail,
      changeEmailError
    }
  }
}
</script> -->
