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
        <h3 class="card-title d-flex justify-content-between">
          {{ week.name }}
        </h3>
        <a href="#" class="btn btn-primary btn-sm">E</a>
        <a :href="'/dash/week/' + week.id" class="btn btn-info btn-sm">V</a>
        <a href="#" @click="deleteWeek(week)" class="btn btn-danger btn-sm"
          >D</a
        >
      </div>
      <div class="card-body">
        <p class="card-text small">Descrição</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Iniciante</div>
              <div class="d-flex align-items-start">
                <span>Treino A</span>
                <span class="ms-3">
                  <a href="#" class="btn btn-success badge">Ver treino</a>
                </span>
              </div>
            </div>
          </li>
        </ul>
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
    const weekData = await this.$axios.get(`http://127.0.0.1:8000/api/weeks`);
    this.weeks = weekData.data;
  },
};
</script>
