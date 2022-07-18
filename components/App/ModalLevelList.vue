<template>
  <div
    class="modal fade"
    :id="'weekLevelList' + week.id"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content modal-level-list">
        <div class="modal-header">
          <h3 class="modal-title" id="exampleModalLabel">
            {{ week.name }}
          </h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">Lista de Níveis! <--</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" data-bs-dismiss="modal">
            Fechar
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
};
</script>

<style scoped>
.modal-level-list {
  background-color: #d9eddf;
  color: #0f181e;
  box-shadow: 0px 0px 50px -10px #00df7b;
}
</style>
