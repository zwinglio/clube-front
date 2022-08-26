<template>
  <form @submit.prevent="updateExercise" class="mt-4">
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        id="exercise-name"
        placeholder="Ex.: Agachamento"
        v-model="exercise.name"
      />
    </div>
    <div class="form-group mt-3">
      <label for="exercise-description">Descrição</label>
      <textarea
        class="form-control"
        id="exercise-description"
        placeholder="Ex.: Usar a barra na última série"
        v-model="exercise.description"
      />
    </div>
    <div class="form-group mt-3">
      <label for="exercise-repetitions">Repetições</label>
      <input
        type="text"
        class="form-control"
        id="exercise-repetitions"
        placeholder="Ex.: 15 vezes"
        v-model="exercise.repetitions"
      />
    </div>
    <div class="form-group mt-3">
      <label for="exercise-repetitions">ID do Vídeo no Youtube</label>
      <input
        type="text"
        class="form-control"
        id="exercise-repetitions"
        placeholder="Ex.: 1JVnp3qwWAs"
        v-model="exercise.video_url"
      />
    </div>
    <div class="form-group mt-3">
      <label for="exercise-order">Order</label>
      <input
        type="number"
        class="form-control"
        id="exercise-order"
        placeholder="Ex.: 01"
        v-model="exercise.order"
        required
      />
    </div>
    <div class="form-group mt-3 d-none">
      <label for="exercise-serie_id">Serie</label>
      <input
        type="text"
        class="form-control"
        id="exercise-serie_id"
        v-model="exercise.serie_id"
        disabled
      />
    </div>
    <button type="submit" class="btn btn-success mt-4">Editar exercício</button>
  </form>
</template>

<script>
export default {
  props: {
    routeData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      // TODO: melhorar isso aqui
      exercise: this.$props.routeData[4],
      week_id: this.$props.routeData[0],
      level_id: this.$props.routeData[1],
      serie_id: this.$props.routeData[2],
      sheet_id: this.$props.routeData[3],
    };
  },
  methods: {
    async updateExercise() {
      const res = await this.$axios
        .post(
          `/weeks/${this.week_id}/levels/${this.level_id}/sheets/${this.sheet_id}/series/${this.serie_id}/exercises/${this.exercise.id}`,
          this.exercise,
          { params: { _method: "PUT" } }
        )
        .catch((err) => {
          console.log(err);
        });

      this.$router.push("/dashboard");
    },
  },
};
</script>
