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
  <section id="garantia">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h2>07 dias grátis!</h2>
          <hr class="w-100" />
          <p>
            Você pode testar o Clube da Musculação por 7 dias! E se você não se
            adaptar, por qualquer motivo, pode pedir seu dinheiro de volta. É só
            mandar uma mensagem no contato@voceemforma.net ou no aplicativo.
          </p>
          <a :href="checkoutLink" class="btn btn-primary w-100">
            Experimente agora!
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#garantia {
  background-color: #00657c;
  padding: 75px 0;
}

h2 {
  font-family: "Inter";
  font-style: italic;
  font-weight: 900;
  font-size: 62px;
  line-height: 95.5%;
  text-align: center;
  text-transform: uppercase;
}
.btn-primary {
  background: #00df7b;
  border-radius: 10px;
  padding: 20px 20px;
  margin: 10px 0 10px 0;
}
</style>
