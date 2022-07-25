<template>
  <section class="sheets">
    <div class="container">
      <!-- Header do treino -->
      <div class="row justify-content-center py-4">
        <div class="col-lg-6">
          <NuxtLink to="/weeks" class="btn btn-sm btn-outline-secondary"
            >Voltar</NuxtLink
          >
          <a class="btn btn-sm btn-outline-primary">Salvar</a>
        </div>
      </div>

      <!-- Treino -->
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <p>Semana 01 - Intermediário</p>
          <h1 class="mb-4">Emagrecimento | Treino A</h1>
          <p class="rounded-2 bg-light text-dark p-3">
            <strong>Instruções:</strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi vel consectetur euismod.
          </p>
          <hr />
          <div class="d-flex align-items-center">
            <h2 class="p-0 m-0">Série 01</h2>
            <div id="series-info" class="ms-4">
              <p class="small p-0 m-0">Instruções vem aqui</p>
              <p class="small p-0 m-0">Repetir 3x</p>
            </div>
          </div>
          <hr />

          <div class="treino d-flex align-items-center mt-4">
            <!-- Thumb do vídeo de exercício -->
            <div class="video-treino">
              <a href="#modalExercicio" data-bs-toggle="modal">
                <img
                  src="https://img.youtube.com/vi/cAio13Q2e5s/1.jpg"
                  alt="Treino"
                />
                <div class="container__overlay">
                  <i class="bi bi-play text-primary"></i>
                </div>
              </a>
            </div>

            <!-- Informação do exercício -->
            <div class="treino-info ms-4">
              <h3 class="p-0 m-0">Supino Máquina</h3>
              <p class="p-0 m-0 fw-bold">15 vezes</p>
              <p class="small p-0 m-0">Fazer com halteres do lado da máquina</p>
            </div>
          </div>
          <!-- Modal do vídeo do exercício com Vídeo -->
          <div class="modal fade" id="modalExercicio" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content bg-dark">
                <div class="embed-responsive embed-responsive-16by9 rounded-3">
                  <div class="alert alert-info">
                    Dica: pause o vídeo antes de voltar
                  </div>
                  <iframe
                    class="embed-responsive-item rounded-3 w-100"
                    style="height: 250px"
                    src="https://www.youtube.com/embed/cAio13Q2e5s?autoplay=0&controls=0&showinfo=0&rel=0"
                    width="450"
                    height="250"
                    allowfullscreen
                  ></iframe>
                </div>
                <button
                  type="button"
                  class="btn btn-outline-primary rounded-3 mt-3 fw-bold"
                  data-bs-dismiss="modal"
                >
                  Voltar
                </button>
              </div>
            </div>
          </div>
          <!-- Fim do Thumb do vídeo de exercício -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      week_id: this.$route.params.week_id,
      level_id: this.$route.params.level_id,
      sheet_id: this.$route.params.sheet_id,
    };
  },
};
</script>

<style>
.video-treino {
  position: relative;
  color: #00df7b !important;
}

.video-treino i {
  font-size: 4rem;
  transition: all 0.5s;
}

.video-treino img {
  filter: saturate(0);
  opacity: 0.7;
  transition: all 0.5s;
}

.video-treino:hover img {
  filter: saturate(1);
  box-shadow: 0px 0px 50px -30px #00df7b;
}

.video-treino:hover i {
  color: #ffffff !important;
  opacity: 0.5;
  font-size: 5rem;
}

.container__overlay {
  /* Position */
  left: 0;
  position: absolute;
  top: 0;

  /* Take full size */
  height: 100%;
  width: 100%;

  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;

  /* Add a dark background */
  background-color: rgba(0, 0, 0, 0.25);
}

hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    var(--primary-color),
    rgba(0, 0, 0, 0)
  );
}
</style>
