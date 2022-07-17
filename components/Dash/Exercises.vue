<template>
  <div class="exercises">
    <div v-for="exercise in exercises" class="row rounded-3 mt-2">
      <div class="col-4">Imagem</div>
      <div class="col-8">
        <h3 class="my-0 py-0">{{ exercise.name }}</h3>
        <p class="small my-0 py-0">{{ exercise.repetitions }}</p>
        <p class="small my-0 py-0">{{ exercise.description }}</p>
        <button
          @click="deleteExercise(exercise.id)"
          class="btn btn-outline-danger btn-sm small py-0"
        >
          Excluir
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    week_id: {
      type: Number,
      required: true,
    },
    level_id: {
      type: Number,
      required: true,
    },
    sheet_id: {
      type: Number,
      required: true,
    },
    serie_id: {
      type: Number,
      required: true,
    },
  },

  async fetch() {
    const exercisesData = await this.$axios
      .get(
        `weeks/${this.week_id}/levels/${this.level_id}/sheets/${this.sheet_id}/series/${this.serie_id}/exercises`
      )
      .then((res) => {
        return res.data.exercises;
      })
      .catch((err) => {
        console.log(err);
      });
    return (this.exercises = exercisesData);
  },
  data() {
    return {
      exercises: [],
    };
  },
  methods: {
    deleteExercise(id) {
      prompt("Digite 'DELETE' para confirmar a exclusão");
      if (prompt() === "DELETE") {
        this.$axios
          .delete(
            `weeks/${this.week_id}/levels/${this.level_id}/sheets/${this.sheet_id}/series/${this.serie_id}/exercises/${id}`
          )
          .then((res) => {
            this.$fetch();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style></style>
