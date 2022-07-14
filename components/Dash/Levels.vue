<template>
  <div class="levels">
    <div
      v-if="!$fetchState.pending && levels.length == []"
      class="alert alert-warning"
    >
      Nenhum nível cadastrado!
    </div>

    <div v-for="level in levels" :key="level.id" class="level">
      <div class="d-flex justify-content-start">
        <p>
          <strong>Nível:</strong> {{ level.name }}
          <button
            href="#"
            @click="deleteLevel(level.id)"
            class="badge bg-danger btn btn-danger link-light fw-bold"
          >
            X
          </button>
        </p>
      </div>
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
    const levelData = await this.$axios
      .get(`weeks/${this.week}/levels`)
      .catch((err) => {
        this.levels = [];
      });
    if (levelData) {
      this.levels = levelData.data.levels;
    }
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
  methods: {
    async deleteLevel(value) {
      if (prompt('Para deletar o nível, digite "DELETE"') == "DELETE") {
        await this.$axios
          .delete(`weeks/${this.week}/levels/${value}`)
          .catch((error) => {
            alert("Não foi possível deletar o nível!");
          });
        await this.$fetch();
      }
    },
  },
};
</script>
