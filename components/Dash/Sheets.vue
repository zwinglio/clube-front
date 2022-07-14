<template>
  <div class="sheets mb-3">
    <div class="sheet">
      <div class="accordion" id="acordionSheets">
        <div v-for="sheet in sheets" class="accordion-item">
          <p class="accordion-header" :id="'heading' + 1">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#sheet' + sheet.id"
            >
              {{ sheet.objective }}
            </button>
          </p>
          <div
            :id="'sheet' + sheet.id"
            class="accordion-collapse collapse"
            data-bs-parent="#acordionSheets"
          >
            <div class="accordion-body">
              <div class="container">
                <div class="row">
                  <div class="col-3">Imagem</div>
                  <div class="col-9">
                    <h3>Agachamento</h3>
                    <p class="small">12 vezes</p>
                    <p class="small">Lorem ipsun</p>
                  </div>
                  <hr />
                </div>
                <div class="row">
                  <div class="col-12">
                    <a
                      class="btn btn-outline-info w-100"
                      href="Adicionar exercício"
                    >
                      Adicionar Exercício
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="btn btn-outline-info w-100" href="#">Adcionar Treino</a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    sheets: [],
  }),
  async fetch() {
    const sheetData = await this.$axios.get(
      `weeks/${this.week}/levels/${this.level}/sheets`
    );
    this.sheets = sheetData.data.sheets;
  },
  computed: {
    week: {
      get() {
        return this.$attrs.week;
      },
      set(value) {
        this.$attrs.week = value;
      },
    },
    level: {
      get() {
        return this.$attrs.level;
      },
      set(value) {
        this.$attrs.level = value;
      },
    },
  },
};
</script>

<style></style>
