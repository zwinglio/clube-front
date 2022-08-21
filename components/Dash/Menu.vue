<template>
  <section id="dash-navbar">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="row">
            <div class="col-lg-3">
              <NuxtLink to="/weeks" class="btn btn-secondary fw-bold">
                Voltar
              </NuxtLink>
            </div>
            <div class="col-lg-9 text-end">
              <NuxtLink
                to="/weeks"
                class="btn btn-outline-primary fw-bold"
                disabled
              >
                Treinos
              </NuxtLink>
              <NuxtLink
                to="/weeks"
                class="btn btn-outline-primary fw-bold"
                disabled
              >
                Usuários
              </NuxtLink>
            </div>
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
