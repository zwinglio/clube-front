<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-lg-12">
        <h1>Gerenciamento de Semanas</h1>
        <DashCardWeek />
        <NuxtLink
          to="/dashboard/create-week"
          class="btn btn-success mt-4 w-100 py-3 fw-bold"
        >
          <i class="bi bi-plus-circle"></i> Semana
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
