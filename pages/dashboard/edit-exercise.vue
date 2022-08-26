<template>
  <section id="create-week">
    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-6">
          <NuxtLink to="/dashboard" class="btn btn-secondary">Voltar</NuxtLink>
          <h1 class="mt-4">Editar exercício</h1>
          <DashEditExerciseForm :routeData="routeData" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    exercise() {
      return this.$route.params.data[4];
    },
    routeData() {
      return this.$route.params.data;
    },
  },
};
</script>

<style></style>
