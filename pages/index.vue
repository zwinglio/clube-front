<template>
  <div class="landing">
    <section id="intro">
      <div class="container">
        <div class="row mt-5">
          <div class="col-lg-6">
            <h1>Clube da Musculação 💪</h1>
            <p>
              Em breve você tera acesso a um
              <strong>aplicativo completo de exercícios físicos</strong> para
              você que malha sozinho na academia!
            </p>
            <ul>
              <li>Leve seu treino no seu bolso!</li>
              <li>Comece pelos níveis: iniciante, intermediário e avançado</li>
              <li>Mude de treino toda semana</li>
              <li>Suporte direto com o personal</li>
            </ul>
            <hr class="mt-5" />
            <p class="small">Tem uma chave de teste?</p>
            <NuxtLink to="app" class="btn btn-primary btn-sm"
              >Faça o login!</NuxtLink
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: "DefaultLayout",
  // middleware: [
  //   function ({ redirect }) {
  //     redirect("/landing");
  //   },
  // ],
};
</script>

<style>
section {
  padding-top: 25px;
  padding-bottom: 25px;
}
</style>
