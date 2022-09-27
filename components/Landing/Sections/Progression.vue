<script>
export default {
  data() {
    return {
      levels: [
        {
          name: "Iniciante",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, aut aspernatur!",
          icon: "🥰",
        },
        {
          name: "Itermediário",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, aut aspernatur!",
          icon: "💪",
        },
        {
          name: "Avançado",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, aut aspernatur!",
          icon: "😰",
        },
      ],
    };
  },
};
</script>

<template>
  <section id="promessa">
    <div class="container">
      <div class="row mt-5">
        <div class="col-lg-6 text-center">
          <nuxt-img src="/img/landing/carina_notebook.png" />
        </div>
        <div class="col-lg-6">
          <h2 class="mt-4">Comece de onde faz sentido pra você!</h2>
          <hr />
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
        </div>
      </div>
      <div class="row levels justify-content-center">
        <LandingPartialsLevelItem v-for="level in levels" :level="level" />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* img {
  border-radius: 15px;
  filter: drop-shadow(10px 10px 0px #00df7b);
  width: 65%;
} */

@media (max-width: 992px) {
  img {
    width: 90%;
  }
}
</style>
