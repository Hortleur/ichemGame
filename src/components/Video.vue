<script setup>
defineProps({
  videoSrc: String,
  name: String,
  job: String,
  com: String,
});
</script>

<template>
  <div
    class="bg-darkblue bg-opacity-80 rounded-3xl flex flex-col items-center text-white p-2 ring-1 ring-yellowIg"
  >
    <div class="text-center">
      <h2 class="text-2xl font-bold">{{ name }}</h2>
      <p class="text-xl font-semibold">{{ job }}</p>
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
    <cite class="text-center">{{ com }}</cite>
  </div>
</template>
