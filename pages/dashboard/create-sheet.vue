<template>
  <section id="create-week">
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <NuxtLink to="/dashboard" class="btn btn-secondary">Voltar</NuxtLink>

          <h1 class="mt-4">Criar um novo treino</h1>
          <div class="alert alert-info">
            Você está editando o nível: {{ level.name }}
          </div>
          <DashCreateSheetForm :level="level" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      week: {},
    };
  },
  computed: {
    level() {
      return this.$route.params.level;
    },
  },
};
</script>

<style></style>
