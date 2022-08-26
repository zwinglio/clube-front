<template>
  <div
    class="modal fade"
    :id="'videoExercise' + exercise_id"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ exercise_name }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <iframe
            width="560"
            height="315"
            :src="'https://www.youtube.com/embed/' + video_url + '?rel=0'"
            title="YouTube video player"
            class="w-100"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    exercise_id: {
      type: Number,
      required: true,
    },
    video_url: {
      type: String,
      required: true,
    },
    exercise_name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
