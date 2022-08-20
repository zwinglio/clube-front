<template>
  <section id="login">
    <div class="container mt-3">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <h2>💪 Entre para começar!</h2>
          <!--erro handle-->
          <transition name="fade">
            <div
              class="alert alert-danger mt-3"
              v-if="errors && errors.length > 0"
            >
              {{ errors }} 😢
            </div>
          </transition>
          <form class="mt-4" autoComplete="off" @submit.prevent="submitForm">
            <div class="form-group mt-3">
              <label for="email">E-mail</label>
              <input
                type="email"
                class="form-control mt-2"
                id="email"
                v-model="email"
                placeholder="Enter email"
                v-bind:class="{ 'is-invalid': errors.length > 0 }"
                required
              />
            </div>
            <div class="form-group mt-3">
              <label for="password">Senha</label>
              <input
                type="password"
                class="form-control mt-2"
                id="password"
                v-model="password"
                placeholder="Password"
                required
                v-bind:class="{ 'is-invalid': errors.length > 0 }"
              />
            </div>
            <div class="w-100 text-center">
              <button type="submit" class="btn btn-primary w-100 mt-4">
                <div class="spinner-border" role="status" v-if="loading">
                  <span class="visually-hidden">Validando informações...</span>
                </div>
                <span v-else class="fw-bold">Entrar</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      loading: false,
    };
  },
  methods: {
    submitForm(event) {
      this.loading = true;
      this.errors = [];
      this.$auth
        .loginWith("laravelJWT", {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then(() => this.$router.push("/weeks"))
        .catch((error) => {
          if (error.response.status === 401) {
            this.errors = "E-mail ou senha inválidos";
            this.loading = false;
          }
        });
    },
  },
  transition: {
    name: "fade",
    mode: "out-in",
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
