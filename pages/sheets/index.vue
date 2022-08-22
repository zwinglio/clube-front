<template>
  <section class="sheets">
    <div class="container">
      <!-- Header do treino -->
      <div class="row justify-content-center py-4">
        <div class="col-lg-6">
          <NuxtLink to="/weeks" class="btn btn-sm btn-outline-secondary">
            Voltar
          </NuxtLink>
          <a class="btn btn-sm btn-outline-primary">Salvar</a>
        </div>
      </div>

      <!-- spinner -->
      <div class="row justify-content-center" v-if="$fetchState.pending">
        <div class="col-lg-6">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Carregando...</span>
          </div>
        </div>
      </div>

      <!-- Treino -->
      <AppSheetInfo :sheet="sheet" v-else>
        <AppSheetSerie v-for="serie in sheet.series" :serie="serie" />
      </AppSheetInfo>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sheet: {
        series: [],
        level: {
          week: {},
        },
      },
      week_id: this.$route.params.week_id,
      level_id: this.$route.params.level_id,
      sheet_id: this.$route.params.sheet_id,
    };
  },

  async fetch() {
    const res = await this.$axios.$get(
      `weeks/${this.week_id}/levels/${this.level_id}/sheets/${this.sheet_id}`
    );
    this.sheet = res.sheet;
  },
};
</script>

<style>
.video-treino {
  position: relative;
  color: #00df7b !important;
}

.video-treino i {
  font-size: 4rem;
  transition: all 0.5s;
}

.video-treino img {
  filter: saturate(0);
  opacity: 0.7;
  transition: all 0.5s;
}

.video-treino:hover img {
  filter: saturate(1);
  box-shadow: 0px 0px 50px -30px #00df7b;
}

.video-treino:hover i {
  color: #ffffff !important;
  opacity: 0.5;
  font-size: 5rem;
}

.container__overlay {
  /* Position */
  left: 0;
  position: absolute;
  top: 0;

  /* Take full size */
  height: 100%;
  width: 100%;

  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;

  /* Add a dark background */
  background-color: rgba(0, 0, 0, 0.25);
}

hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    var(--primary-color),
    rgba(0, 0, 0, 0)
  );
}
</style>
