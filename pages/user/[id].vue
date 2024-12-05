<template>
  <div class="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md space-y-4">
    <NuxtLink to="/" class="text-blue-500 hover:text-blue-700 underline">← Volver</NuxtLink>
    <div v-if="user">
      <h1 class="text-xl font-semibold text-gray-800">
        {{ user.name.first }} {{ user.name.last }}
      </h1>
      <p class="text-gray-600"><strong>Email:</strong> {{ user.email }}</p>
      <p class="text-gray-600"><strong>Teléfono:</strong> {{ user.phone }}</p>
      <p class="text-gray-600">
        <strong>Ubicación:</strong> {{ user.location.city }}, {{ user.location.country }}
      </p>
      <img :src="user.picture.large" alt="Foto del usuario" class="mt-4 w-full rounded-lg shadow-md" />
    </div>
    <div v-else>
      <p class="text-gray-600">No se encontró información del usuario. Por favor, regresa a la lista.</p>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '~/stores/user'
import { useRoute } from 'vue-router'

const userStore = useUserStore()
const route = useRoute()

// Buscar al usuario por el ID en el store
const user = userStore.users.find(u => u.login.uuid === route.params.id)
</script>
