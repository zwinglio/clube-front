<template>
  <div
    class="modal fade"
    :id="'weekLevelList' + week.id"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content modal-level-list modal-dark">
        <div class="modal-header">
          <h3 class="modal-title">🗓️ {{ week.name }}</h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div v-if="levels.length == 0" class="alert alert-success">
            Nenhum nível encontrado
          </div>
          <div v-else>
            <p class="alert alert-success">ℹ️ Selecione seu nível</p>
            <div class="levels" v-for="level in levels">
              <a
                :href="'#modalListaTreino' + level.id"
                data-bs-toggle="modal"
                class="btn btn-primary btn-lg w-100 mt-3"
              >
                {{ level.name }}
              </a>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-success"
            data-bs-dismiss="modal"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    week: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      levels: this.week.levels,
    };
  },
};
</script>

<style scoped>
.modal-level-list {
  background-color: #d9eddf;
  color: #0f181e;
  box-shadow: 0px 0px 50px -10px #00df7b;
}
</style>
