<script>
export default {
  data() {
    return {
      proofs: [
        "/img/landing/aed/prova01.png",
        "/img/landing/aed/prova02.png",
        "/img/landing/aed/prova03.png",
        "/img/landing/aed/prova04.png",
        "/img/landing/aed/prova05.png",
        "/img/landing/aed/prova06.png",
      ],
    };
  },
};
</script>

<template>
  <section id="provasocial">
    <div class="container">
      <div class="row text-center">
        <div class="col-lg-4" v-for="proof in proofs">
          <nuxt-img :src="proof" format="webp" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* img {
  width: 80%;
} */
</style>
