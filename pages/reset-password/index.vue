<template>
  <div class="container">
    <div class="row justify-content-center mt-4">
      <div class="col-lg-6">
        <h1>Recuperação de senha</h1>
        <div class="forgot" v-if="!sended">
          <p>
            Digite o endereço de e-mail cadastrado para recuperar sua senha.
          </p>

          <div v-if="emptyEmail" class="alert alert-warning">
            O campo de e-mail é obrigatório.
          </div>

          <div v-if="notEmail" class="alert alert-warning">
            Você digitou um e-mail inválido.
          </div>

          <div v-if="notFind" class="alert alert-warning">
            Usuário não encontrado na base de dados, verifique o e-mail.
          </div>

          <hr />

          <form action="#" v-if="!sended">
            <div class="form-group my-2">
              <label for="email" class="form-label">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                class="form-control"
                v-model="email"
                required
              />
            </div>
            <div class="d-flex align-items-center">
              <button
                type="submit"
                class="btn btn-primary"
                @click.prevent="resetPassword()"
              >
                Obter link de recuperação 📩
              </button>
              <div
                v-if="loading"
                class="spinner-border text-primary ms-2"
                role="status"
              >
                <span class="visually-hidden">Carregando...</span>
              </div>
            </div>
          </form>
        </div>

        <div class="success" v-if="sended">
          <p>✅ Tudo certo!</p>
          <p>
            Enviamos um e-mail para você com um link para recuperação de senha.
          </p>
          <p>
            <NuxtLink to="/login">Voltar para o login</NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      emptyEmail: false,
      notEmail: false,
      notFind: false,
      loading: false,
      sended: false,
    };
  },
  methods: {
    async resetPassword() {
      this.emptyEmail = false;
      this.notEmail = false;
      this.notFind = false;

      if (!this.email) {
        this.emptyEmail = true;
        return;
      }

      if (!this.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        this.notEmail = true;
        return;
      }

      this.loading = true;

      await this.$axios
        .post("forgot-password", {
          email: this.email,
        })
        .then((response) => {
          console.log(response);
          this.loading = false;
          this.sended = true;
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 404) {
            this.notFind = true;
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
