<template>
  <form @submit.prevent="storeWeek" class="mt-4">
    <div class="form-group">
      <label for="week-name">Nome da semana</label>
      <input
        type="text"
        class="form-control"
        id="week-name"
        v-model="week.name"
        placeholder="Nome da semana"
      />
    </div>
    <div class="form-group">
      <label for="week-start">Ordem</label>
      <input
        type="number"
        class="form-control"
        id="week-start"
        v-model="week.order"
      />
    </div>
    <button type="submit" class="btn btn-success mt-4">Criar Semana</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      week: {
        name: "",
        order: 0,
      },
    };
  },
  methods: {
    async storeWeek() {
      const res = await this.$axios.post("weeks", this.week);
      //router back
      this.$router.push("/dashboard");
    },
  },
};
</script>
