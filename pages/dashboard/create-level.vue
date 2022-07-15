<template>
  <section id="create-week">
    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-6">
          <NuxtLink to="/dashboard" class="btn btn-secondary">Voltar</NuxtLink>
          <h1 class="mt-4">Criar um novo nível</h1>
          <div class="alert alert-info">
            {{ week.name }}
          </div>
          <DashCreateLevelForm :week="week" />
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
  mounted() {
    this.week = this.$route.params.week;
  },
};
</script>

<style></style>
