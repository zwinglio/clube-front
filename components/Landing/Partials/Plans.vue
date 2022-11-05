<template>
  <div class="row justify-content-center mt-4">
    <div class="col-lg-5">
      <div class="preco-box">
        <p class="produto">Clube da Musculação</p>
        <p class="valor">R$ 9,90</p>
        <p class="valor-subtitulo">por mês / ano</p>
        <p>
          Para quem treina em academia e quer uma personal de bolso. 12 semanas
          de treino nos níveis iniciante, avançado/intermediário e acesso direto
          a Carina.
        </p>
        <ul>
          <li>Clube da Musculação</li>
          <li>Suporte Direto com Carina</li>
          <li>Grupo Exclusivo</li>
          <li>7 Dias de Garantia</li>
        </ul>
        <a
          :href="checkoutLink"
          target="_blank"
          class="btn btn-primary w-100 mt-4 mb-4"
          >Assinar agora o clube!</a
        >
      </div>
    </div>
    <div class="col-lg-5">
      <div class="preco-box">
        <p class="produto">Clube da Musculação<br />+ Você em Forma</p>
        <p class="valor">R$ 19,90</p>
        <p class="valor-subtitulo">por mês / ano</p>
        <p>
          Para quem treina em academia ou em casa e quer resultados com 30
          minutos por dia. Acesso completo a plataforma com programas de
          exercício e nutrição.
        </p>
        <p class="m-0 fw-bold">Tudo do Clube, e mais</p>
        <ul>
          <li>8 Programas de Treino</li>
          <li>1 Programa de Receitas Funcionais</li>
          <li>1 Guia Nutricional</li>
          <li>Lives de Quarentena</li>
        </ul>
        <a
          :href="checkoutLink"
          target="_blank"
          class="btn btn-primary w-100 mt-4 mb-4"
          >Garantir o melhor preço!</a
        >
      </div>
    </div>
    <!-- <div class="col-lg-4">
      <div class="preco-box">
        <p class="produto">Clube da Musculação</p>
        <p class="valor">R$ 9,90</p>
        <p class="valor-subtitulo">por mês / ano</p>
        <p>
          Para quem treina em academia e quer uma personal de bolso. 12 semanas
          de treino nos níveis iniciante, avançado/intermediário e acesso direto
          a Carina.
        </p>
        <ul>
          <li>Clube da Musculação</li>
          <li>Clube da Musculação</li>
          <li>Clube da Musculação</li>
          <li>Clube da Musculação</li>
        </ul>
        <a
          :href="checkoutLink"
          target="_blank"
          class="btn btn-primary w-100 mt-4 mb-4"
          >Começar agora!</a
        >
      </div>
    </div> -->
  </div>
</template>

<style scoped>
p {
  font-size: 14px;
}

ul li {
  font-size: 14px;
}
.preco-box {
  background-color: #0f181e;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 20px;
}
.preco-box .valor {
  font-family: "League Gothic";
  font-style: normal;
  font-weight: 400;
  font-size: 58.815px;
  line-height: 93.5%;
  /* identical to box height, or 55px */
  text-transform: uppercase;
  margin-bottom: 0px;
  margin-top: 10px;
}
.preco-box .produto {
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
}
.preco-box .valor-subtitulo {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  margin: 0;
  color: rgba(217, 237, 223, 0.4);
}

.btn {
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
  color: #0f181e;
  padding: 20px 20px;
  border: none;
}
</style>
