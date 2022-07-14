<template>
  <form @submit.prevent="storeLevel" class="mt-4">
    <div class="form-group">
      <label for="level-name">Nome do nível</label>
      <input
        type="text"
        class="form-control"
        id="level-name"
        placeholder="Iniciante, intermediário, avançado"
        v-model="level.name"
      />
    </div>
    <div class="form-group mt-3">
      <label for="level-description">Descrição</label>
      <textarea
        class="form-control"
        id="level-description"
        placeholder="Se for necessário alguma observação"
        v-model="level.description"
      />
    </div>
    <div class="form-group mt-3 d-none">
      <label for="week-start">Semana</label>
      <input
        type="text"
        class="form-control"
        v-model="level.week_id"
        disabled
      />
    </div>
    <button type="submit" class="btn btn-success mt-4">Criar novo nível</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      week: {},
      level: {
        name: "",
        description: "",
        week_id: this.$route.params.week.id,
      },
    };
  },
  methods: {
    async storeLevel() {
      const res = await this.$axios.post(
        `weeks/${this.week.id}/levels`,
        this.level
      );
      this.$router.push("/dash");
    },
  },
  mounted() {
    this.week = this.$route.params.week;
  },
};
</script>
