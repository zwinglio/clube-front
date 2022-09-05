<template>
  <section id="create-week">
    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-6">
          <NuxtLink to="/dashboard" class="btn btn-secondary">Voltar</NuxtLink>
          <h1 class="mt-4">Editar exercício</h1>
          <DashEditExerciseForm
            :week_id="week_id"
            :level_id="level_id"
            :sheet_id="sheet_id"
            :serie_id="serie_id"
            :exercise="exercise"
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
      week_id: this.$route.params.week_id,
      level_id: this.$route.params.level_id,
      sheet_id: this.$route.params.sheet_id,
      serie_id: this.$route.params.serie_id,
      exercise: this.$route.params.exercise,
    };
  },
};
</script>

<style></style>
