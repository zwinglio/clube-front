<template>
  <section id="header">
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-lg-6 d-flex justify-content-between">
          <h1>Logo</h1>
          <div>
            <NuxtLink to="/dashboard" class="btn btn-primary">
              Painel
            </NuxtLink>
            <a href="#" class="btn btn-primary disabled" disabled>Perfil</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
