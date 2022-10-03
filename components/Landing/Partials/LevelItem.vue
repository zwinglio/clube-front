<script>
export default {
  props: {
    level: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="level col-lg-3 position-relative">
    <h3>{{ level.name }}</h3>
    <p>
      {{ level.description }}
    </p>
    <span
      class="position-absolute top-0 start-25 translate-middle badge bg-primary caixa-topo"
    >
      <p class="mt-3">{{ level.icon }}</p>
    </span>
  </div>
</template>

<style scoped>
.caixa-topo {
  width: 80px;
  height: 80px;
  font-size: 2rem;
  text-align: center;
  margin-left: 50px;
}

h3 {
  margin-top: 25px;
}

p {
  margin-top: 15px;
}
.level {
  padding: 45px 25px;
  background-color: #000000;
  margin-top: 75px;
  margin-right: 30px;
  margin-left: 30px;
  border-radius: 25px;
}
</style>
