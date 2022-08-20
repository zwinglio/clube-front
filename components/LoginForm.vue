<template>
  <section id="login">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <h2>💪 Entre para começar!</h2>
          <form class="mt-4" autoComplete="off" @submit.prevent="submitForm">
            <div class="form-group mt-3">
              <label for="email">E-mail</label>
              <input
                type="email"
                class="form-control mt-2"
                id="email"
                v-model="email"
                placeholder="Enter email"
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
              />
            </div>
            <div class="w-100 text-center">
              <button type="submit" class="btn btn-primary w-75 mt-4">
                Entrar
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
    };
  },
  methods: {
    submitForm(event) {
      this.erros = [];
      this.$auth
        .loginWith("laravelJWT", {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then(() => this.$router.push("/teste"))
        .catch((error) => {
          if (error.response.status === 422) throw error;
          this.erros = Object.values(error.response.data.erros).flat();
        });
    },
  },
};
</script>
