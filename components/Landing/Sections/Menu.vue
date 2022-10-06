<template>
  <section>
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-lg-2">
          <NuxtLink to="weeks" class="btn btn-outline-primary btn-sm">
            🔥 Área de Membro
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding-top: 15px;
  padding-bottom: 15px;
}
.btn {
  border-radius: 25;
  margin: 0;
}

.btn:hover {
  background-color: #f5f5f5;
  color: #000;
  text-transform: none;
}

.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}
</style>
