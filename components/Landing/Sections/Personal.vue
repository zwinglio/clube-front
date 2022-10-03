<script>
export default {
  props: {
    checkoutLink: {
      type: String,
      default: null,
    },
  },
};
</script>

<template>
  <section id="personal">
    <div class="container">
      <div class="row mt-5 align-items-center">
        <div class="col-lg-6 text-center order-1 order-lg-0">
          <nuxt-img src="/img/landing/carina_cintura.png" alt="promessa" />
        </div>
        <div class="col-lg-6 order-0 order-lg-1">
          <h2>Conheça sua nova personal, Carina Rosin!</h2>
          <p>
            <strong>COMECE A PERDER PESO!</strong> Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Earum asperiores enim labore officiis
            nemo. Quisquam ut dolore commodi id aperiam numquam labore
            quibusdam. Dolore molestias quidem nostrum perferendis consequuntur!
            Exercitationem.
          </p>
          <p>
            <strong>COMECE A PERDER PESO!</strong> Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Earum asperiores enim labore officiis
            nemo. Quisquam ut dolore commodi id aperiam numquam labore
            quibusdam. Dolore molestias quidem nostrum perferendis consequuntur!
            Exercitationem.
          </p>
          <a
            :href="checkoutLink"
            target="_blank"
            class="btn btn-primary w-100 mt-4 mb-4"
            >Ter uma personal de bolso!</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#personal {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #2f4858;
  padding-bottom: 0;
}

img {
  margin-top: -50px;
  width: 75%;
}

@media (max-width: 768px) {
  img {
    margin-top: 10px;
  }
}
</style>
