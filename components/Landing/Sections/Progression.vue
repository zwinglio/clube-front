<script>
export default {
  data() {
    return {
      levels: [
        {
          name: "Iniciante",
          description:
            "Os níveis foram divididos em iniciante e intermediário/avançado para garantir que o aluno progrida e tenha sempre a sensação de crescimento pessoal durante a prática de exercício.",
          icon: "🥰",
        },
        {
          name: "Itermediário",
          description:
            "Você já pratica exercícios e quer elevar seu treino para o próximo nível, aqui você trabalhar com ainda mais intensidade para conseguir avançar, sair do platô e colher os resultados que você não conseguiria enxergar treinando sem o acompanhamento adequado.",
          icon: "💪",
        },
        {
          name: "Avançado",
          description:
            "Treina quase todo dia? Demora horas na academia? A prática tá ficando monótona? Sem problemas, no nível avançado você vai ser levado a sua carga máxima, potência máxima e intensidade máxima! Tudo isso de forma dinâmica e com o personal ao seu alcance!",
          icon: "😰",
        },
      ],
    };
  },
};
</script>

<template>
  <section id="progression">
    <div class="container">
      <div class="row mt-5">
        <div class="col-lg-6 text-center">
          <nuxt-img src="/img/landing/carina_notebook.png" />
        </div>
        <div class="col-lg-6">
          <h2 class="mt-4">Comece de onde faz sentido pra você!</h2>
          <hr />
          <p>
            Para garantir que você progrida e sempre tenha a sensação de avanço
            na prática dos exercícios, os treinos foram divididos em iniciante e
            intermediário/avançado.
          </p>
          <p>
            Além da motivação, essa abordagem te coloca no ritmo certo, evita
            lesões e fortalece seus músculos e trabalha a sua resistência para
            que você se sinta seguro de progredir para a próxima etapa. Tudo tem
            que acontecer no seu tempo e adaptado ao seu corpo.
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
