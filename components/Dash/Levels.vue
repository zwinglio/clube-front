<template>
  <div class="levels">
    <div v-if="levels.length == []" class="alert alert-warning">
      Nenhum nível cadastrado!
    </div>

    <div v-else v-for="level in levels" :key="level.id" class="level">
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
    levels: {
      type: Array,
      required: true,
    },
  },
  computed: {
    week_id() {
      if (this.levels.length > 0) {
        return this.levels[0].week_id;
      }
    },
  },
  methods: {
    async deleteLevel(level_id) {
      if (prompt('Para deletar o nível, digite "DELETE"') == "DELETE") {
        await this.$axios
          .delete(`weeks/${this.week_id}/levels/${level_id}`)
          .catch((error) => {
            alert("Não foi possível deletar o nível!");
          });

        return (this.levels = this.levels.filter(
          (level) => level.id != level_id
        ));
      }
    },
  },
};
</script>
