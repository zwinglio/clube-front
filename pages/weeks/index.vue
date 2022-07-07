<template>
  <div>
    <section id="header">
      <div class="container mt-4">
        <div class="row justify-content-center">
          <div class="col-lg-6 d-flex justify-content-between">
            <h1>Logo</h1>
            <div>
              <a href="/dash" class="btn btn-primary">Painel</a>
              <a href="#" class="btn btn-primary disabled" disabled>Perfil</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="weeks">
      <div class="container mt-4">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <h2>Qual semana você está?</h2>
            <div v-for="week in weeks" :key="week">
              <a href="#" class="btn btn-primary w-100 mt-3">{{ week.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "WeeksPage",
  layout: "DefaultLayout",
  data() {
    return {
      weeks: [
        {
          name: "Semana 01",
          id: 1,
        },
        {
          name: "Semana 02",
          id: 2,
        },
        {
          name: "Semana 03",
          id: 3,
        },
      ],
    };
  },
};
</script>

<style></style>
