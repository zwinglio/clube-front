<template>
  <div class="series">
    <div
      v-if="!$fetchState.pending && series.length == 0"
      class="alert alert-warning"
    >
      Nenhuma série cadastrada!
    </div>
    <div v-else class="serie">
      <div v-for="serie in series" class="row">
        <div
          class="col-12 border-bottom d-flex justify-content-between align-items-center"
        >
          <div>
            <h3 class="m-0 p-0">{{ serie.name }}</h3>
            <p class="small m-0 p-0">
              {{ serie.repetitions }} // {{ serie.description }}
            </p>
          </div>
          <div class="btn-group align-middle">
            <button
              class="btn btn-outline-danger"
              @click="deleteSerie(serie.id)"
              title="Remover série de exercício"
            >
              <i class="bi bi-trash"></i>
            </button>
            <NuxtLink
              class="btn btn-outline-success"
              :to="{
                name: 'dashboard-create-exercise',
                params: {
                  week_id: week_id,
                  level_id: level_id,
                  sheet_id: sheet_id,
                  serie: serie,
                },
              }"
              title="Adicionar exercício"
            >
              <i class="bi bi-plus-circle"></i>
            </NuxtLink>
          </div>
        </div>
        <DashExercises
          class="mb-4"
          :week_id="week_id"
          :level_id="level_id"
          :sheet_id="sheet_id"
          :serie_id="serie.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    week_id: {
      type: Number,
      required: true,
    },
    level_id: {
      type: Number,
      required: true,
    },
    sheet_id: {
      type: Number,
      required: true,
    },
  },
  async fetch() {
    const seriesData = await this.$axios
      .get(
        `weeks/${this.week_id}/levels/${this.level_id}/sheets/${this.sheet_id}/series`
      )
      .then((res) => {
        return res.data.series;
      })
      .catch((err) => {
        return [];
      });
    this.series = seriesData;
  },
  data() {
    return {
      series: [],
    };
  },
  methods: {
    async deleteSerie(serie_id) {
      if (prompt('Para deletar a série, digite "DELETE"') == "DELETE") {
        await this.$axios
          .delete(
            `weeks/${this.week_id}/levels/${this.level_id}/sheets/${this.sheet_id}/series/${serie_id}`
          )
          .catch((error) => {
            alert("Não foi possível deletar a série!");
          });
        await this.$fetch();
      }
    },
  },
};
</script>

<style></style>
