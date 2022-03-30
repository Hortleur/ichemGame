<script setup>
defineProps({
  videoSrc: String,
});
</script>

<template>
  <div
    class="bg-darkblue bg-opacity-80 rounded-3xl flex flex-col items-center text-white p-2"
  >
    <div>
      <video
        :src="videoSrc"
        type="video/mp4"
        controls
        controlslist=" nodownload"
        class="rounded-2xl"
      ></video>
    </div>
  </div>
</template>
