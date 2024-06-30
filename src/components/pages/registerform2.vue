<template>
  <div>
    <form novalidate="" action="" class="space-y-12">
      <div class="space-y-4">
        <div>
          <label for="fullname" class="block mb-2 text-sm">Full name</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="John Doe"
            class="w-full px-3 py-2 border rounded-md border-orange-700 bg-gray-200 text-orange-100"
          />
        </div>
        <div>this is gonna have an option folder</div>
        <div>
          <div class="flex justify-between mb-2">
            <label for="phoneNumber" class="text-sm">phone Number</label>
          </div>
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="+234 9123 084 737 "
            class="w-full px-3 py-2 border rounded-md border-orange-700 bg-gray-200 text-orange-100"
          />
        </div>
      </div>
      <div class="space-y-2">
        <div>
          <router-link to="/form2">
            <button
              type="button"
              class="w-full px-8 py-3 font-semibold rounded-md bg-orange-400 text-white"
            >
              Register
            </button></router-link
          >
        </div>
        <p class="px-6 text-sm text-center text-orange-400">
          already have an account?
          <a rel="noopener noreferrer" href="#" class="hover:underline text-orange-900"
            ><router-link to="/login">Sign in</router-link></a
          >.
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
