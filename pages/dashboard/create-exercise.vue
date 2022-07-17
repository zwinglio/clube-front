<template>
  <section id="create-week">
    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-6">
          <NuxtLink to="/dashboard" class="btn btn-secondary">Voltar</NuxtLink>
          <h1 class="mt-4">Criar um novo exercício</h1>
          <div class="alert alert-info py-1">
            {{ serie.name }}
          </div>
          <DashCreateExerciseForm
            :serie="serie"
            :week_id="week_id"
            :level_id="level_id"
            :sheet_id="sheet_id"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      serie: "",
      week_id: this.$route.params.week_id,
      level_id: this.$route.params.level_id,
      sheet_id: this.$route.params.sheet_id,
    };
  },
  mounted() {
    this.serie = this.$route.params.serie;
  },
};
</script>

<style></style>
