<script>
export default {
  middleware: ["auth"],

  data() {
    return {
      sheet: [],
    };
  },

  methods: {
    handleFileUpload(event) {
      this.sheet = event.target.files[0];
    },
    submitFile() {
      const formData = new FormData();
      formData.append("sheet", this.sheet);

      this.$axios
        .post("/import/sheets", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <section id="import">
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <NuxtLink to="/dashboard" class="btn btn-secondary">Voltar</NuxtLink>
        </div>
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-lg-8">
          <h1>Importação de treinos</h1>
          <p>Para importar os treinos siga o seguinte modelo:</p>
          <p>Depois de preencher, basta subir o arquivo no formato CSV</p>
          <hr />

          <form>
            <label for="sheet" class="form-label">
              Selecione o arquivo do seu computador:
            </label>
            <input
              type="file"
              name="sheet"
              id="sheet"
              class="form-control w-100"
              @change="handleFileUpload($event)"
            />
            <button
              type="submit"
              @click.prevent="submitFile()"
              class="btn btn-primary mt-4 w-100"
            >
              Importar
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
