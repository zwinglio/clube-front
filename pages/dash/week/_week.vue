<template>
  <section id="levels">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <h1 class="mt-4">Lista de níveis da semana</h1>
          <h2>Semana X</h2>
          <hr class="py-4" />
          <table class="table text-light">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="level in levels">
                <td>{{ level.name }}</td>
                <td>{{ level.description }}</td>
                <td class="text-end">
                  <a href="#" class="btn btn-primary">E</a>
                  <a :href="'/dash/level/' + level.id" class="btn btn-info"
                    >V</a
                  >
                  <a href="#" @click="deleteLevel(level)" class="btn btn-danger"
                    >D</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      levels: [],
    };
  },
  methods: {
    async deleteLevel(level) {
      const response = await this.$axios.delete(
        `localhost:8000/api/levels/${level.id}`
      );
      this.fetchLevels();
    },
    async fetchLevels() {
      const response = await this.$axios.get(
        `http://localhost:8000/api/levels/`
      );
      this.levels = response.data;
    },
  },
  created() {
    this.fetchLevels();
  },
};
</script>

<style></style>
