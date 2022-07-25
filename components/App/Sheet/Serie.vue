<template>
  <div class="serie">
    <hr />
    <div class="d-flex align-items-center">
      <h2 class="p-0 m-0">{{ serie.name }}</h2>
      <div id="series-info" class="ms-4">
        <p class="small p-0 m-0">{{ serie.description }}</p>
        <p class="small p-0 m-0">{{ serie.repetitions }}</p>
      </div>
    </div>
    <hr />
    <AppSheetExercise
      v-for="exercise in serie.exercises"
      :exercise="exercise"
    />
  </div>
</template>
<script>
export default {
  props: {
    serie: {
      type: Object,
      required: true,
    },
  },
};
</script>
