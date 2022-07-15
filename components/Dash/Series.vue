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
        <div class="col-12 border-bottom d-flex justify-content-between">
          <div>
            <h3 class="m-0 p-0">{{ serie.name }}</h3>
            <p class="small m-0 p-0">
              {{ serie.repetitions }} // {{ serie.description }}
            </p>
          </div>
          <div>
            <NuxtLink
              class="btn btn-success w-100"
              :to="{
                name: 'dashboard-create-exercise',
                params: { serie: serie.id },
              }"
              title="Adicionar exercício"
            >
              +
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- <DashExercises /> -->
  </div>
</template>

<script>
export default {
  props: {
    week_id: {
      type: Number,
      required: true,
    },
    level: {
      type: Object,
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
        `weeks/${this.week_id}/levels/${this.level.id}/sheets/${this.sheet_id}/series`
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
};
</script>

<style></style>
