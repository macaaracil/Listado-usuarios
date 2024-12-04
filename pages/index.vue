<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Lista de Usuarios</h1>
    <ul>
      <li v-for="user in userStore.users" :key="user.login.uuid" class="mb-2">
        <NuxtLink :to="`/user/${user.login.uuid}`" @click="userStore.selectUser(user)" class="text-blue-500 underline">
          {{ user.name.first }} {{ user.name.last }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()

onMounted(() => {
  if (!userStore.users.length) {
    userStore.fetchUsers()
  }
})
</script>
