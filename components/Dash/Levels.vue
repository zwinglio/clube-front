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
            class="badge bg-danger text-light btn btn-danger fw-bold"
          >
            <i class="bi bi-trash3"></i>
          </button>
        </p>
      </div>
      <DashSheetsAccordion
        :week_id="week_id"
        :level="level"
        class="p-2 shadow-sm rounded-3"
      />
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
  },
  data() {
    return {
      levels: [],
    };
  },
  async fetch() {
    const levelData = await this.$axios
      .get(`weeks/${this.week_id}/levels`)
      .catch((err) => {
        this.levels = [];
      });
    if (levelData) {
      this.levels = levelData.data.levels;
    }
  },
  methods: {
    async deleteLevel(value) {
      if (prompt('Para deletar o nível, digite "DELETE"') == "DELETE") {
        await this.$axios
          .delete(`weeks/${this.week_id}/levels/${value}`)
          .catch((error) => {
            alert("Não foi possível deletar o nível!");
          });
        await this.$fetch();
      }
    },
  },
};
</script>
