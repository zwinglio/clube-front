<template>
  <div class="levels">
    <div
      v-if="!$fetchState.pending && levels.length == []"
      class="alert alert-warning"
    >
      Nenhum nível cadastrado!
    </div>

    <div v-for="level in levels" :key="level.id" class="level">
      <p><strong>Nível:</strong> {{ level.name }}</p>
      <DashSheets :week="week" :level="level.id" />
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    levels: [],
  }),
  async fetch() {
    const levelData = await this.$axios.get(`weeks/${this.week}/levels`);
    this.levels = levelData.data.levels;
  },
  computed: {
    week: {
      get() {
        return this.$attrs.week;
      },
      set(value) {
        this.$attrs.week = value;
      },
    },
  },
};
</script>
