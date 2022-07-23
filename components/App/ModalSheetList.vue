<template>
  <!-- Início do Modal de Treinos -->
  <div class="modal fade" :id="'modalListaTreino' + level.id">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title text-dark">💪 {{ level.name }}</h3>
        </div>
        <div class="modal-body">
          <div v-if="sheets.length == 0">
            <div class="alert alert-warning">⚠️ Nenhum treino encontrado</div>
          </div>
          <p v-else class="alert alert-success">
            🔵 Beleza, agora selecione seu treino pra começar!
          </p>
          <div
            v-for="sheet in sheets"
            :key="sheet.id"
            class="btn-group w-100 py-0"
          >
            <a href="#" class="btn btn-secondary w-75 py-3 fw-bold">
              {{ sheet.objective }}
            </a>
            <a href="#" class="btn btn-primary w-25">
              <i class="bi bi-play-fill fs-3 text-dark"></i>
            </a>
          </div>
        </div>
        <div class="modal-footer">
          <a
            :href="'#weekLevelList' + week.id"
            data-bs-toggle="modal"
            class="btn btn-outline-success"
          >
            Voltar
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- Fim do Modal de Treinos -->
</template>

<script>
export default {
  props: {
    week: {
      type: Object,
      required: true,
    },
    level: {
      type: Object,
      required: true,
    },
  },
  computed: {
    sheets() {
      // filter sheets where level_id = level.id
      return this.week.sheets.filter(
        (sheet) => sheet.level_id == this.level.id
      );
    },
  },
};
</script>

<style></style>
