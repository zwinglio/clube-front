<template>
  <div class="exercises">
    <div v-for="exercise in exercises" class="row rounded-3 mt-2">
      <div class="col-4">
        <img
          src="https://img.youtube.com/vi/syyeLkbTs04/hqdefault.jpg"
          type="button"
          data-bs-toggle="modal"
          class="w-100"
          :data-bs-target="'#videoExercise' + exercise.id"
        />
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
              data: [week_id, level_id, sheet_id, serie_id, exercise],
            },
          }"
          class="btn btn-outline-success btn-sm small py-0"
        >
          Editar
        </NuxtLink>
      </div>
      <DashVideoModal
        :video_url="exercise.video_url"
        :exercise_id="exercise.id"
        :exercise_name="exercise.name"
      />
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
