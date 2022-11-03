<template>
  <section id="header">
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-lg-6 d-flex justify-content-between">
          <nuxt-img src="/img/logo.png" alt="" width="80" format="webp" />
          <div>
            <NuxtLink
              to="/dashboard"
              class="btn btn-primary"
              v-if="userRole == 'admin'"
            >
              Painel
            </NuxtLink>
            <NuxtLink to="/profile" class="btn btn-primary"> Perfil </NuxtLink>
            <button @click="logout" class="btn btn-primary">Logout</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout();
    },
  },
  computed: {
    user() {
      return this.$auth.user;
    },
    userRole() {
      const role = this.$auth.user.roles;
      return role.map((role) => role.name);
    },
  },
};
</script>

<style></style>
