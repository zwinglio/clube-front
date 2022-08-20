<template>
  <div>
    <DefaultHeader />
    <section id="weeks">
      <div class="container mt-4">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <p>Bom dia, {{ user.name }} 👊</p>
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
                <AppModalSheetList :week="week" :level="level" />
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
  layout: "DefaultLayout",
  middleware: ["auth"],
  data() {
    return {
      weeks: [],
    };
  },
  async fetch() {
    const weeksData = await this.$axios.$get("/weeks");
    this.weeks = weeksData;
  },
  computed: {
    user() {
      return this.$auth.user;
    },
  },
};
</script>

<style></style>
