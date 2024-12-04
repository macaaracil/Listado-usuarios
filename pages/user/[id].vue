<template>
  <div class="p-6">
    <NuxtLink to="/" class="text-blue-500 underline">Volver</NuxtLink>
    <div v-if="user">
      <h1 class="text-2xl font-bold">
        {{ user.name.first }} {{ user.name.last }}
      </h1>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Teléfono:</strong> {{ user.phone }}</p>
      <p><strong>Ubicación:</strong> {{ user.location.city }}, {{ user.location.country }}</p>
      <img :src="user.picture.large" alt="Foto del usuario" class="mt-4 rounded-lg" />
    </div>
    <div v-else>
      <p>No se encontró información del usuario. Por favor regresa a la lista.</p>
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
