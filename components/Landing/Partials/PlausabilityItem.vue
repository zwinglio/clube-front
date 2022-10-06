<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="row">
    <div class="col-lg-2">
      <h3>{{ value }}</h3>
    </div>
    <div class="col-lg-10">
      <p class="fw-bold">{{ title }}</p>
      <slot />
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-family: "Inter";
  font-style: italic;
  font-weight: 900;
  font-size: 62px;
  line-height: 95.5%;
  margin-top: 15px;
}

p {
  text-transform: uppercase;
}
.row {
  margin-top: 55px;
}

p {
  margin-top: 15px;
}
</style>
