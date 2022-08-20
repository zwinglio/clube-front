<template>
  <div>
    <div class="card text-dark mt-4" v-for="week in weeks">
      <div class="card-header d-flex justify-content-between">
        <h2 class="card-title">
          {{ week.name }}
        </h2>
        <div class="actions btn-group">
          <NuxtLink
            :to="{ name: 'dashboard-create-level', params: { week: week } }"
            class="btn btn-outline-success"
            data-bs-placement="top"
            title="Criar novo nível"
          >
            <i class="bi bi-plus-circle"></i> Nível
          </NuxtLink>
          <button @click="deleteWeek(week.id)" class="btn btn-outline-danger">
            <i class="bi bi-x-circle"></i> Semana
          </button>
        </div>
      </div>
      <div class="card-body">
        <DashLevels :levels="week.levels" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weeks: [],
    };
  },

  async fetch() {
    const weeksData = await this.$axios.$get("/weeks");
    this.weeks = weeksData;
  },

  methods: {
    async deleteWeek(value) {
      if (prompt('Para deletar a semana, digite "DELETE"') == "DELETE") {
        await this.$axios.delete(`weeks/${value}`).catch((error) => {
          alert("Não foi possível deletar a semana");
        });
        await this.$fetch();
      }
    },
  },
};
</script>

<style>
.custom-tooltip {
  --bs-tooltip-bg: var(--bs-success);
}
</style>
