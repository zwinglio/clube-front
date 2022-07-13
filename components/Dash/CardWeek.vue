<template>
  <div>
    <div
      class="spinner-border text-success"
      role="status"
      v-if="$fetchState.pending"
    >
      <span class="sr-only"></span>
    </div>

    <div class="card text-dark mt-4" v-for="week in weeks">
      <div class="card-header">
        <h2 class="card-title d-flex justify-content-start">
          {{ week.name }}
        </h2>
      </div>
      <div class="card-body">
        <DashLevels :week="week.id" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    weeks: [],
  }),
  async fetch() {
    const weekData = await this.$axios.get(`weeks`);
    this.weeks = weekData.data;
  },
};
</script>
