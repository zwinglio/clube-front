<template>
  <div class="container">
    <div class="row justify-content-center mt-4">
      <div class="col-lg-6">
        <h1>Criar nova senha</h1>
        <p>
          ✅ Se você solicitou a recuperação de senha, basta escolher uma senha
          nova para continuar.
        </p>

        <div v-if="tokenExpired" class="alert alert-warning">
          O link de recuperação de senha expirou. Solicite uma nova recuperação.
        </div>

        <div v-if="!requirements" class="alert alert-warning">
          A senha deve conter pelo menos 8 caracteres, incluindo letras e
          números.
        </div>

        <div v-if="!match" class="alert alert-warning">
          As senhas não conferem.
        </div>

        <form action="">
          <div class="form-group">
            <label for="password">Nova senha</label>
            <input
              type="password"
              id="password"
              name="password"
              class="form-control"
              v-model="password"
              required
            />
          </div>
          <div class="form-group mt-2">
            <label for="password">Confirme a nova senha</label>
            <input
              type="password"
              id="password"
              name="password"
              class="form-control"
              v-model="passwordMatch"
              required
            />
          </div>
          <div class="d-flex align-items-center mt-4">
            <button
              type="submit"
              class="btn btn-primary w-75"
              @click.prevent="sendNewPassword()"
            >
              Criar nova senha
            </button>
            <div
              v-if="loading"
              class="spinner-border text-primary ms-3"
              role="status"
            >
              <span class="visually-hidden">Carregando...</span>
            </div>
            <div v-if="success" class="ms-2">
              <span class="small text-primary">Senha alterada!</span>
              <span class="small">Redirecionando...</span>
            </div>
          </div>
        </form>
        <hr class="my-4" />
        <p class="small opacity-50">
          ⚠️ Atenção, se você não solicitou a alteração de senha. Ignore o
          e-mail e não preencha o formulário.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      password: "",
      passwordMatch: "",
      match: true,
      requirements: true,
      tokenExpired: false,
      success: false,
      loading: false,
      userId: this.$route.params.id,
      token: this.$route.params.token,
    };
  },
  methods: {
    async sendNewPassword() {
      if (this.password.length < 8) {
        this.requirements = false;
        return;
      } else {
        this.requirements = true;
      }

      if (this.password !== this.passwordMatch) {
        this.match = false;
        return;
      } else {
        this.match = true;
      }

      this.loading = true;

      await this.$axios
        .post("forgot-password/change", {
          userId: this.userId,
          token: this.token,
          password: this.password,
          password_confirmation: this.passwordMatch,
        })
        .then((response) => {
          this.success = true;
          this.loading = false;
          setTimeout(() => {
            this.$router.push("/login");
          }, 2000);
        })
        .catch((error) => {
          if (error.response.status === 401) {
            this.loading = false;
            this.tokenExpired = true;
          }
          console.log(error);
        });
    },
  },
};
</script>
