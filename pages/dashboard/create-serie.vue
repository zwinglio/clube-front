<template>
  <section id="create-serie">
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <NuxtLink to="/dashboard" class="btn btn-secondary">Voltar</NuxtLink>
          <h1 class="mt-4">Criar uma nova série</h1>
          <div class="alert alert-info">
            Você está criando uma série em:<br />{{ sheet.objective }}
          </div>
          <DashCreateSerieForm
            :sheet="sheet"
            :level_id="level_id"
            :week_id="week_id"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    sheet() {
      return this.$route.params.sheet;
    },
    level_id() {
      return this.$route.params.level_id;
    },
    week_id() {
      return this.$route.params.week_id;
    },
  },
};
</script>

<style></style>
