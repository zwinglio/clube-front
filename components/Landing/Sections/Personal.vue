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
          <nuxt-img
            src="/img/landing/carina01.png"
            alt="promessa"
            format="webp"
            loading="lazy"
            class="w-100"
          />
        </div>
        <div class="col-lg-6 order-0 order-lg-1">
          <h2>Conheça sua nova personal, Carina Rosin!</h2>
          <p>
            Carina Rosin será sua nova personal durante esses 40 dias. Formada
            em Educação Física pela USP e bacharelando em nutricionismo, foi
            responsável pela transformação de mais de 3000 alunas durante seus
            15 anos de carreira.
          </p>
          <p>
            Muito cedo percebeu que fórmulas mágicas não existem e que a
            transformação do estilo de vida das suas alunas só foi possível
            porque a individualidade de cada uma delas foi reconhecida.
          </p>
          <p>O treino correto é aquele que você consegue fazer regularmente.</p>
          <p>
            Idealizou a plataforma online de exercícios físicos Você em Forma
            com mais de 7 programas de treino que vão desde alongamentos a
            hipertrofia além de nutrição. Já participou de vários programas de
            TV mostrando seus cases de sucesso e lançou dois Reality Shows
            emagrecendo noivas e mamães.
          </p>
          <p>
            Toda essa experiência estará na palma da sua mão, a apenas uma
            mensagem de distância.
          </p>
          <a
            :href="checkoutLink"
            target="_blank"
            class="btn btn-primary w-100 mt-4 mb-4"
          >
            Ter uma personal de bolso!
          </a>
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

.btn:hover,
.btn:focus {
  text-transform: uppercase;
  letter-spacing: 150%;
  color: #fff;
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

img {
  margin-top: 90px;
  width: 75%;
}

@media (max-width: 768px) {
  img {
    margin-top: 10px;
  }
}
</style>
