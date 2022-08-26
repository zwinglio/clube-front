<template>
  <section id="logo">
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-lg-6 text-center">
          <NuxtLink to="/">
            <nuxt-img
              src="/img/logo.png"
              alt=""
              width="150"
              format="webp"
              preload
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
