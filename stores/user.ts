import { defineStore } from 'pinia'

interface RandomUser {
    login: { uuid: string }
    name: { first: string; last: string }
    email: string
    phone: string
    location: { city: string; country: string }
    picture: { large: string }
}

interface RandomUserApiResponse {
    results: RandomUser[]
}

export const useUserStore = defineStore('userStore', {
    state: () => ({
        users: [] as RandomUser[], // Lista de usuarios
        selectedUser: null as RandomUser | null, // Usuario seleccionado
    }),
    actions: {
        async fetchUsers() {
            const { results } = await $fetch<RandomUserApiResponse>('https://randomuser.me/api/?results=10')
            this.users = results
        },
        selectUser(user: RandomUser) {
            this.selectedUser = user
        },
    },
})
