<template>
  <form @submit.prevent="storeSheet" class="mt-4">
    <div class="form-group">
      <label for="sheet-objective">Objetivo</label>
      <input
        type="text"
        class="form-control"
        id="sheet-objective"
        placeholder="Emagrecimento, hipertrofia, condicionamento..."
        v-model="sheet.objective"
      />
    </div>
    <div class="form-group mt-3">
      <label for="sheet-description">Descrição</label>
      <textarea
        class="form-control"
        id="sheet-description"
        placeholder="Se for necessário alguma observação"
        v-model="sheet.description"
      />
    </div>
    <div class="form-group mt-3">
      <label for="sheet-order">Ordem (de listagem na plataforma)</label>
      <input
        type="number"
        class="form-control"
        id="sheet-order"
        placeholder="01"
        v-model="sheet.order"
      />
    </div>
    <div class="form-group mt-3 d-none">
      <label for="week-start">Level</label>
      <input
        type="text"
        class="form-control"
        v-model="sheet.level_id"
        disabled
      />
    </div>
    <button type="submit" class="btn btn-success mt-4">Criar novo nível</button>
  </form>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      sheet: {
        objective: "",
        description: "",
        level_id: this.$route.params.level.id,
        order: "",
      },
    };
  },
  methods: {
    async storeSheet() {
      const res = await this.$axios.post(
        `weeks/${this.week_id}/levels/${this.level.id}/sheets`,
        this.sheet
      );
      this.$router.push("/dashboard");
    },
  },
};
</script>
