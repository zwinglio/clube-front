<template>
  <section id="header">
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-lg-6 d-flex justify-content-between">
          <nuxt-img src="/img/logo.png" alt="" width="80" format="webp" />
          <div>
            <NuxtLink to="/dashboard" class="btn btn-primary">
              Painel
            </NuxtLink>
            <a href="#" class="btn btn-primary disabled" disabled>Perfil</a>
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
};
</script>

<style></style>
