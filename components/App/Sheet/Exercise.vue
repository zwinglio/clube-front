<template>
  <div class="treino d-flex align-items-center mt-4">
    <!-- Thumb do vídeo de exercício -->
    <div class="video-treino">
      <a :href="'#modalExercicio' + exercise.id" data-bs-toggle="modal">
        <img
          :src="'https://img.youtube.com/vi/' + exercise.video_url + '/1.jpg'"
          alt="Treino"
        />
        <div class="container__overlay">
          <i class="bi bi-play text-primary"></i>
        </div>
      </a>
    </div>

    <!-- Informação do exercício -->
    <div class="treino-info ms-4">
      <h3 class="p-0 m-0">{{ exercise.name }}</h3>
      <p class="p-0 m-0 fw-bold">{{ exercise.repetitions }}</p>
      <p class="small p-0 m-0">{{ exercise.description }}</p>
    </div>
    <!-- Modal do vídeo do exercício com Vídeo -->
    <div class="modal fade" :id="'modalExercicio' + exercise.id" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-dark">
          <div class="embed-responsive embed-responsive-16by9 rounded-3">
            <div class="alert alert-info">
              Dica: pause o vídeo antes de voltar
            </div>
            <iframe
              class="embed-responsive-item rounded-3 w-100"
              style="height: 250px"
              :src="
                'https://www.youtube.com/embed/' +
                exercise.video_url +
                '?autoplay=0&controls=0&showinfo=0&rel=0'
              "
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
</template>

<script>
export default {
  props: {
    exercise: {
      type: Object,
      required: true,
    },
  },
};
</script>
