<template>
  <div class="sheets mb-3">
    <div class="sheet">
      <div class="accordion" id="acordionSheets">
        <div v-for="sheet in sheets" :key="sheet.id" class="accordion-item">
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
                <DashSeries
                  :week_id="week_id"
                  :level_id="level.id"
                  :sheet_id="sheet.id"
                />
                <div class="row">
                  <div class="col-12">
                    <div class="btn-group w-100 mt-3">
                      <NuxtLink
                        :to="{
                          name: 'dashboard-create-serie',
                          params: {
                            sheet: sheet,
                            level_id: level.id,
                            week_id: week_id,
                          },
                        }"
                        class="btn btn-outline-success"
                      >
                        <i class="bi bi-plus-circle"></i> Série
                      </NuxtLink>
                      <button
                        href="#"
                        @click="deleteSheet(sheet.id)"
                        class="btn btn-outline-danger"
                      >
                        <i class="bi bi-x-circle"></i> Treino
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NuxtLink
        class="btn btn-outline-info w-100 mt-4"
        :to="{
          name: 'dashboard-create-sheet',
          params: { week_id: week_id, level: level },
        }"
      >
        Adicionar Treino
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    week_id: {
      type: Number,
      required: true,
    },
    level: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      sheets: [],
    };
  },
  async fetch() {
    const sheetData = await this.$axios
      .get(`weeks/${this.week_id}/levels/${this.level.id}/sheets`)
      .catch((err) => {
        this.sheets = [];
      });
    this.sheets = sheetData.data.sheets;
  },
  methods: {
    async deleteSheet(value) {
      if (prompt('Para deletar o treino, digite "DELETE"') == "DELETE") {
        await this.$axios
          .delete(
            `weeks/${this.week_id}/levels/${this.level.id}/sheets/${value}`
          )
          .catch((error) => {
            alert("Não foi possível deletar o treino!");
          });
        await this.$fetch();
      }
    },
  },
};
</script>

<style></style>
