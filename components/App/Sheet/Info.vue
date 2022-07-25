<template>
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <p>{{ sheet.level.week.name }} - {{ sheet.level.name }}</p>
      <h1 class="mb-4">{{ sheet.objective }}</h1>
      <p class="rounded-2 bg-light text-dark p-3">
        <strong>Instruções:</strong>
        {{ sheet.description }}
      </p>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sheet: {
      type: Object,
      required: true,
    },
  },
};
</script>
