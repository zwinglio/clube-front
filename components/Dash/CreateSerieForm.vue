<template>
  <form @submit.prevent="storeSerie" class="mt-4">
    {{ this.sheet_id }}
    <div class="form-group">
      <label for="serie-name">Name</label>
      <input
        type="text"
        class="form-control"
        id="serie-name"
        placeholder="Ex: Série 01"
        v-model="serie.name"
      />
    </div>
    <div class="form-group mt-3">
      <label for="serie-description">Descrição</label>
      <textarea
        class="form-control"
        id="serie-description"
        placeholder="Se for necessário alguma observação"
        v-model="serie.description"
      />
    </div>
    <div class="form-group mt-3">
      <label for="serie-repetitions">Repetições</label>
      <input
        type="text"
        class="form-control"
        id="serie-repetitions"
        placeholder="Ex: 12 vezes"
        v-model="serie.repetitions"
      />
    </div>
    <div class="form-group mt-3">
      <label for="serie-order">Ordem(que aparecerá no aplicativo)</label>
      <input
        type="number"
        class="form-control"
        id="serie-order"
        placeholder="XX"
        v-model="serie.order"
      />
    </div>
    <div class="form-group mt-3 d-none">
      <label for="sheet">Treino</label>
      <input
        type="text"
        class="form-control"
        name="sheet"
        v-model="serie.sheet_id"
        disabled
      />
    </div>
    <button type="submit" class="btn btn-success mt-4">Criar nova série</button>
  </form>
</template>

<script>
export default {
  props: {
    sheet: {
      type: Object,
      required: true,
    },
    level_id: {
      type: Object,
      required: true,
    },
    week_id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      serie: {
        name: "",
        description: "",
        repetitions: "",
        order: "",
        sheet_id: this.sheet.id,
      },
    };
  },
  methods: {
    async storeSerie() {
      const res = await this.$axios.post(
        `weeks/${this.week_id}/levels/${this.level_id}/sheets/${this.sheet.id}/series`,
        this.serie
      );
      this.$router.push("/dashboard");
    },
  },
};
</script>
