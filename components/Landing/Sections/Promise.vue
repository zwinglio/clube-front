<template>
  <section id="promessa">
    <div class="container">
      <div class="row mt-5">
        <div class="col-lg-5">
          <h1>O caminho certo para perder peso!</h1>
          <p class="mt-4">
            <strong>COMECE A PERDER PESO!</strong> Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Earum asperiores enim labore officiis
            nemo. Quisquam ut dolore commodi id aperiam numquam labore
            quibusdam. Dolore molestias quidem nostrum perferendis consequuntur!
            Exercitationem.
          </p>
          <NuxtLink to="login" class="btn btn-primary w-100 mt-4 mb-4">
            Quero fazer parte!
          </NuxtLink>
        </div>
        <div class="col-lg-7 text-center">
          <nuxt-img
            src="/img/landing/carina01.png"
            alt="promessa"
            class="w-75"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#promessa {
  padding-top: 35px;
  padding-bottom: 0px;
}

img {
  margin-top: -50px;
}

@media (max-width: 768px) {
  img {
    margin-top: 0px;
  }
}
</style>
