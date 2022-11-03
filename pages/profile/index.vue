<template>
  <div class="content">
    <section id="profile">
      <div class="container">
        <div class="row justify-content-center py-4">
          <div class="col-lg-6">
            <NuxtLink to="/weeks" class="btn btn-secondary"><- Voltar</NuxtLink>
          </div>
        </div>
        <div class="row justify-content-center py-2">
          <div class="col-lg-6">
            <h2>Seus dados</h2>
            <p>
              Utilize essa área para confirmar seus dados e alterar sua senha
            </p>
            <p><strong class="text-primary">Nome:</strong> {{ user.name }}</p>
            <p>
              <strong class="text-primary">E-mail:</strong> {{ user.email }}
            </p>
            <hr />
          </div>
        </div>
        <div class="row justify-content-center py-2 mb-4">
          <div class="col-lg-6">
            <h3>Alterar a senha</h3>
            <div class="alert alert-info">
              👀 Para alterar sua senha, preencha os campos abaixo e clique em
              "Alterar senha".
            </div>

            <div v-if="alert.type" :class="`alert alert-${alert.type}`">
              <span v-html="alert.message"></span>
            </div>

            <form action="#">
              <div class="form-group mb-3">
                <label for="currentPassword" class="mb-2">Senha atual</label>
                <input
                  type="password"
                  class="form-control"
                  id="currentPassword"
                  v-model="currentPassword"
                  required
                />
              </div>
              <div class="form-group mb-3">
                <label for="newPassword" class="mb-2">Nova senha</label>
                <input
                  type="password"
                  class="form-control"
                  id="newPassword"
                  v-model="newPassword"
                  required
                />
              </div>
              <div class="form-group mb-3">
                <label for="confirmPassword" class="mb-2"
                  >Confirmar senha</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="confirmPassword"
                  v-model="confirmPassword"
                  required
                />
              </div>
              <div class="text-end">
                <button
                  type="submit"
                  class="btn btn-outline-primary"
                  @click.prevent="changePassword"
                >
                  Alterar senha ->
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      alert: {
        type: "",
        message: "",
      },
    };
  },
  computed: {
    user() {
      return this.$auth.user;
    },
  },
  methods: {
    async changePassword() {
      // verify if the new password has at least 6 characters
      if (this.newPassword.length < 6) {
        this.alert.type = "warning";
        this.alert.message = "A senha deve ter no mínimo 6 caracteres";
        return;
      }

      if (this.newPassword !== this.confirmPassword) {
        this.alert.type = "warning";
        this.alert.message = "As novas senhas não conferem";
        return;
      }

      const res = await this.$axios
        .post(`users/${this.$auth.user.id}/password`, {
          actual_password: this.currentPassword,
          new_password: this.newPassword,
          new_password_confirmation: this.confirmPassword,
        })
        .then((res) => {
          this.alert.type = "secondary";
          this.alert.message =
            "Senha alterada com sucesso!<br />Retornando para o início em 5 segundos...";
          this.returnToWeeks();
        })
        .catch((err) => {
          this.alert.type = "danger";
          this.alert.message = err.response.data.error;
        });
    },
    returnToWeeks() {
      setTimeout(() => {
        this.$router.push("/weeks");
      }, 5000);
    },
  },
};
</script>
