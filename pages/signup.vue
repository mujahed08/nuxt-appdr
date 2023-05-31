<template>
  <div class="container-fluid">
    <div class="d-flex flex-column">
      <div class="py-4 my-4"></div>
      <div class="p-4 d-flex justify-content-center">
        <div class="card" style="width: 20rem;">
          <img
            id="profile-img"
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            class="profile-img-card rounded-top"
          />
          <form @submit.prevent="submit" novalidate>
            <div class="card-body">
              <h5 class="card-title text-primary">Signup</h5>
              <div class="form-group mb-2">
                <label for="username" class="text-primary fs-6">Username</label>
                <input  v-model="state.username" :class="{ 'is-invalid' : v$.username.$error}" type="text" placeholder="Username" class="form-control" id="username">
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback text-start" v-if="v$.username.$error">Name is required</div>
              </div>
              <div class="form-group mb-2">
                <label for="email" class="text-primary">Email</label>
                <input  v-model="state.email" :class="{ 'is-invalid' : v$.email.$error}" type="email" placeholder="Email" class="form-control" id="email">
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback text-start" v-if="v$.email.$error">Email is required</div>
              </div>
              <div class="form-group mb-2">
                <label for="password" class="text-primary">Password</label>
                <input  v-model="state.password" :class="{ 'is-invalid' : v$.password.$error}" type="password" placeholder="Password" class="form-control" id="password">
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback text-start" v-if="v$.password.$error">Password is required</div>
              </div>

              <div class="form-group mb-2">
                <button class="btn btn-primary btn-block">
                  <span
                    v-show="false"
                    class="spinner-border spinner-border-sm"
                  ></span>
                  Sign Up
                </button>
              </div>
            </div>
          </form>

          <div
            v-if="message"
            class="alert"
            :class="successful ? 'alert-success' : 'alert-danger'"
          >
            {{ message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  
  const state = reactive({
    username: 'mujahed',
    email: 'mujahed@gmail.com',
    password: '123456',
    roles: ['ROLE_USER']
  })
  const rules = {
    username: { required },
    email: { required },
    password: { required }
  }

  const v$ = useVuelidate(rules, state)

  const submit = async () => {
    const result = await v$.value.$validate()
      console.log(result)
      if (!result) {
        return
      }
      const signup = useSignup()
      signup.registerUser({ ...state })
  }

  definePageMeta({
    layout: "custom",
  });
  const message = ''
  const successful = false
</script>