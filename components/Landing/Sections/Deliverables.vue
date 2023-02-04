<script>
export default {
  name: "LandingDeliverables",
  props: {
    checkoutLink: {
      type: String,
      default: null,
    },
    price: {
      type: Object,
      default: {
        indepedent: "R$ 19,90",
        combo: "R$ 29,90",
      },
    },
  },
};
</script>

<template>
  <section id="entregavies">
    <div class="container">
      <div class="row gap-5 justify-content-center align-items-center">
        <div class="col-lg-4 text-center">
          <nuxt-img
            src="/img/landing/devices.png"
            alt="promessa"
            format="webp"
            loading="lazy"
            class="w-100"
          />
        </div>
        <div class="col-lg-7">
          <h2>
            Treino novo no seu celular toda semana, com o suporte que você
            merece!
          </h2>
          <h3>O QUE VOCÊ VAI RECBER?</h3>
          <hr />
          <p>
            12 semanas de treinos, divididos em níveis iniciante e
            intermediário/avançado. Com vídeos de instruções para que você possa
            executar os treinos sozinho na sua academia ou na academia do seu
            condomínio. Além disso, o aluno tem acesso DIRETO ao personal para
            tirar dúvidas, adaptar treinos e pedir dicas sobre a prática de
            exercícios físicos.
          </p>
          <ul>
            <li>12 semanas de treino</li>
            <li>Todos os níveis de intensidade</li>
            <li>Vídeos de execução de cada exercício</li>
            <li>
              Lista de treinos sempre disponível pra você fazer na sua academia
            </li>
            <li>
              Personal trainer a um toque de distância para adaptações e dúvidas
            </li>
            <li>Acesso imediato no celular, tablet ou computador</li>
            <li>Acompanhamento de medidas e progressão (em breve)</li>
            <li>Conteúdo exclusivo pra assinantes (em breve)</li>
          </ul>
          <h4 class="text-warning">
            POR MENOS DE R$ 0,70 POR DIA VOCÊ GARANTE UMA ROTINA SAUDÁVEL E
            ALCANÇA O CORPO QUE VOCÊ DESEJA
          </h4>
          <!-- <div class="preco text-center mt-4 mb-4">
            <nuxt-img src="/img/landing/preco.png" class="align-center" />
          </div> -->
        </div>
      </div>
      <LandingPartialsPlans :checkoutLink="checkoutLink" :price="price" />
    </div>
  </section>
</template>

<style scoped>
#entregavies {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #2f4858;
  padding: 65px 0;
}
.btn-warning {
  filter: drop-shadow(0px 0px 12px #f18924);
  background: #f18924;
  padding: 20px 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
}

h4 {
  font-family: "Inter";
  font-style: italic;
  font-weight: 900;
  font-size: 18px;
  line-height: 115%;
}
</style>
