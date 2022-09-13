<template>
  <section id="dash-navbar">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="row">
            <div class="col">
              <NuxtLink to="/weeks" class="btn btn-secondary fw-bold">
                Voltar
              </NuxtLink>
            </div>
            <div class="col text-end">
              <NuxtLink
                to="/dashboard/import"
                class="btn btn-outline-primary fw-bold position-relative"
                disabled
              >
                Impotar
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
                >
                  Novo
                </span>
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
