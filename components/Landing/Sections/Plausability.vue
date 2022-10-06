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
  <section id="plausabilidade">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <h2>Você consegue resultados porque o clube é diferente!</h2>
          <hr class="mb-4" />
          <LandingPartialsPlausabilityItem
            value="01"
            title="Progressão Contínua"
          >
            Tudo foi pensando progressivamente, isso dizer que mesmo quem nunca
            fez exercício pode começar sem problemas e chegar no treino mais
            avançado, passo a passo. Assim você se sente motivado para continuar
            evoluindo! Exercício bom é aquele que você consegue fazer
            constantemente.
          </LandingPartialsPlausabilityItem>

          <LandingPartialsPlausabilityItem
            value="02"
            title="Acesso Fácil ao Personal"
          >
            O fator determinante para que você consiga atingir seus objetivos é
            que o seu compromisso faça sentido pra você. Por isso é importante
            tirar todas as dúvidas, conseguir executar todos os seus treinos e
            criar uma rotina que se encaixe no seu dia. Por esse motivo você tem
            acesso DIRETO à Personal Carina Rosin, que vai te dar TODO SUPORTE
            necessário para te manter na linha e atingir seus objetivos.
          </LandingPartialsPlausabilityItem>

          <LandingPartialsPlausabilityItem
            value="03"
            title="Barato, descomplicado e eficiente"
          >
            Diferente dos outros métodos, ou dos planos que as academias
            oferecem, no Clube você paga BEM MENOS do que você pagaria para um
            personal da sua academia montar seu treino. Tem acesso a TUDO que
            você precisa pra perder peso e ganhar massa magra de forma fácil e
            descomplicada, e consegue suporte direto no seu Whatsaap! Mais fácil
            que isso? Duvido!
          </LandingPartialsPlausabilityItem>
          <a
            :href="checkoutLink"
            target="_blank"
            class="btn btn-primary w-100 mb-4"
            >Quero assinar agora!</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#plausabilidade {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #2f4858;
  padding-top: 45px;
  padding-bottom: 45px;
}

.btn {
  margin-top: 2100px;
}

h2 {
  font-size: 64px;
  line-height: 93.5%;
}

.btn {
  margin-top: 45px;
}
</style>
