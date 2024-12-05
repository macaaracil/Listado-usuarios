<template>
  <div class="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md space-y-4">
    <h1 class="text-2xl font-bold text-gray-800">Lista de Usuarios</h1>
    <ul class="space-y-3">
      <li v-for="user in userStore.users" :key="user.login.uuid"
        class="border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition">
        <NuxtLink :to="`/user/${user.login.uuid}`" @click="userStore.selectUser(user)"
          class="text-blue-500 font-medium hover:text-blue-700">
          {{ user.name.first }} {{ user.name.last }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()

onMounted(() => {
  if (!userStore.users.length) {
    userStore.fetchUsers()
  }
})
</script>
