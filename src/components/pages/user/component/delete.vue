<template>
  <div>
    <h1>Delete Account</h1>
    <p>Are you sure you want to delete your account?</p>

    <button @click="deleteAccount" :disabled="deletingAccount">Delete Account</button>

    <p v-if="deletionError" class="error">{{ deletionError }}</p>

    <p v-if="deletingAccount">Deleting your account...</p>
  </div>
</template>
<script>
import { ref } from 'vue'
import { getAuth, deleteUser } from 'firebase/auth'
import { getFirestore, collection, where, query, getDocs, deleteDoc } from 'firebase/firestore'
import { getStorage, ref as storageRef, listAll, deleteObject } from 'firebase/storage'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const deletingAccount = ref(false)
    const deletionError = ref(null)
    const router = useRouter()
    const deleteAccount = async () => {
      deletingAccount.value = true
      deletionError.value = null

      const auth = getAuth()
      const user = auth.currentUser

      try {
        const db = getFirestore()

        // Delete user data in Firestore
        const userDocsQuery = query(
          collection(db, 'users'),
          where('userId', '==', user.uid)
        )
        const userDocsSnapshot = await getDocs(userDocsQuery)

        userDocsSnapshot.forEach((doc) => {
          deleteDoc(doc.ref)
        })

        // Delete files in Firebase Storage
        const storage = getStorage()
        const userStorageRef = storageRef(storage, `yourStoragePath/${user.uid}/`)
        const files = await listAll(userStorageRef)

        files.items.forEach((fileRef) => {
          deleteObject(fileRef)
        })

        // Delete the user's account
        await deleteUser(user)

        console.log('Account deleted successfully')

        // Redirect to the "/register" page after successful deletion
        router.push('/register')
      } catch (error) {
        deletionError.value = error.message
      } finally {
        deletingAccount.value = false
      }
    }

    return {
      deletingAccount,
      deletionError,
      deleteAccount
    }
  }
}
</script>
