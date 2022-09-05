<template>
  <div class="exercises">
    <div v-for="exercise in exercises" class="row rounded-3 mt-2">
      <div class="col-4">
        <a :href="'https://youtu.be/' + exercise.video_url" target="_blank">
          <img
            :src="
              'https://img.youtube.com/vi/' +
              exercise.video_url +
              '/hqdefault.jpg'
            "
            class="w-100"
          />
        </a>
      </div>
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
        <NuxtLink
          :to="{
            name: 'dashboard-edit-exercise',
            params: {
              week_id: week_id,
              level_id: level_id,
              sheet_id: sheet_id,
              serie_id: serie_id,
              exercise: exercise,
            },
          }"
          class="btn btn-outline-success btn-sm small py-0"
        >
          Editar
        </NuxtLink>
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
    exercises: {
      type: Array,
      required: true,
    },
  },
  methods: {
    async deleteExercise(exercise_id) {
      if (prompt("Digite 'DELETE' para confirmar a exclusão") === "DELETE") {
        await this.$axios
          .delete(
            `weeks/${this.week_id}/levels/${this.level_id}/sheets/${this.sheet_id}/series/${this.serie_id}/exercises/${exercise_id}`
          )
          .catch((err) => {
            console.log(err);
          });

        return (this.exercises = this.exercises.filter(
          (exercise) => exercise.id != exercise_id
        ));
      }
    },
  },
};
</script>

<style></style>
