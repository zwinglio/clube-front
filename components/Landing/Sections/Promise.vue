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
  <section id="promessa">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <h1>PERCA PESO E GANHE MASSA MAGRA SEM MUDAR DE ACADEMIA!</h1>
          <p class="mt-4"></p>
          <p>
            <strong
              >O ÚNICO APLICATIVO QUE VOCÊ PRECISA PARA ALCANÇAR SEUS
              OBJETIVOS!</strong
            >
          </p>
          <p class="mt-1">
            No Clube da Musculação você tem acesso a treinos semanais, separados
            por níveis (iniciante, intermediário/avançado), com instruções em
            vídeo, e o melhor de tudo, <strong>contato direto</strong> com a
            Personal
          </p>
          <p class="mt-1">
            Mais de 90% das pessoas desistem da atividade física no terceiro
            mês. Isso acontece porque elas não se sentem motivadas, ou têm suas
            necessidades ignoradas. No Clube a gente faz diferente, e eu vou ter
            mostrar resultados!
          </p>

          <a
            :href="checkoutLink"
            target="_blank"
            class="btn btn-primary w-100 mt-4 mb-4"
          >
            QUERO FAZER PARTE!
          </a>
        </div>
        <div class="col-lg-6 text-center">
          <nuxt-img
            src="/img/landing/carina_tata_cocielo.png"
            format="webp"
            sizes="sm:100vw md:50vw lg:587px"
            alt="promessa"
            class="w-100"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#promessa {
  padding-top: 0px;
  padding-bottom: 0px;
}

.btn-primary {
  filter: drop-shadow(0px 0px 5px #00df7b);
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  padding: 15px;
  margin-top: 45px;
  padding: 20px 0;
  text-transform: uppercase;
}

.btn:hover,
.btn:focus {
  text-transform: uppercase;
  letter-spacing: 150%;
  color: #fff;
}

img {
  margin-top: 0px;
}

@media (max-width: 768px) {
  img {
    margin-top: 0px;
  }

  #promessa {
    padding-top: 0px;
    padding-bottom: 0px;
  }
}
</style>
