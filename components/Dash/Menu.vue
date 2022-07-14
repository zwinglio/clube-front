<template>
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <div class="col-lg-3">
        <div class="menu">
          <NuxtLink to="/weeks" class="btn btn-secondary fw-bold"><</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashMenu",
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggle() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style></style>
