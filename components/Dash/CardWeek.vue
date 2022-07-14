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
        <h2 class="card-title d-flex justify-content-between">
          {{ week.name }}
          <NuxtLink
            :to="{ name: 'dash-create-level', params: { week: week } }"
            class="btn btn-success"
            data-bs-placement="top"
            data-bs-toggle="tooltip"
            data-bs-custom-class="custom-tooltip"
            title="Criar novo nível"
          >
            <i class="bi bi-plus-lg"></i>
          </NuxtLink>
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
  mounted() {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  },
};
</script>

<style>
.custom-tooltip {
  --bs-tooltip-bg: var(--bs-success);
}
</style>
