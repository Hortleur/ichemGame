<script setup>
defineProps({
  videoSrc: String,
  imgSrc: String,
});
</script>

<template>
  <div
    class="bg-darkblue bg-opacity-80 rounded-3xl flex flex-col items-center text-white p-2 ring-1 ring-yellowIg m-2"
  >
    <div class="text-center">
      <img :src="imgSrc" alt="présentation du témoignage" class="rounded-3xl mb-3" />
    </div>
    <div>
      <video
        :src="videoSrc"
        type="video/mp4"
        width="300"
        controls
        controlslist=" nodownload"
        class="rounded-2xl"
      ></video>
    </div>
  </div>
</template>
