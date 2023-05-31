export const useSignup = defineStore('signupId', {
    state: () => {
      return {
        visited: false
      }
    },
    getters: {
      getVisited: (state) => state.visited,
    },
    actions: {
        async registerUser(payload) {
            try {
                const data = await apiSignup(payload)
                const { message } = data.value
                console.log(message)
                await navigateTo('/', { replace: true })
            } catch (error) {
                console.log(error)
            }
        },
    },
})