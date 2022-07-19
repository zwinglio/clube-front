<template>
  <div>
    <DefaultHeader />
    <section id="weeks">
      <div class="container mt-4">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <p>Bem vindo, Fluano de Tal</p>
            <hr />
            <h1 class="text-center">Em qual semana você está?</h1>
            <div v-for="week in weeks" :key="week">
              <a
                href="#"
                data-bs-toggle="modal"
                :data-bs-target="'#weekLevelList' + week.id"
                class="btn btn-primary btn-lg py-3 w-100 mt-3 fw-bold"
              >
                {{ week.name }}
              </a>
              <AppModalLevelList :week="week" />
              <div v-for="level in week.levels">
                <!-- Início do Modal de Treinos -->
                <div class="modal fade" :id="'modalListaTreino' + level.id">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h3 class="modal-title text-dark">{{ level.name }}</h3>
                      </div>
                      <div class="modal-body">
                        <ul>
                          <li></li>
                        </ul>
                      </div>
                      <div class="modal-footer">
                        <a
                          :href="'#weekLevelList' + week.id"
                          data-bs-toggle="modal"
                          class="btn btn-outline-success"
                        >
                          Voltar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Fim do Modal de Treinos -->
              </div>
            </div>
            <!-- Fim do V-FOR -->
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
      weeks: [],
    };
  },
  async fetch() {
    const weeksData = await this.$axios.$get("/weeks");
    console.log(weeksData);
    this.weeks = weeksData;
  },
};
</script>

<style></style>
