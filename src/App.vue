<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header
    class="flex flex-col justify-center items-center shadow-lg shadow-zinc-500 relative mb-9"
  >
    <img src="./assets/logoWhite.png" alt="IchemGame, le coach de votre je(u)" />

    <a href="#pres">
      <font-awesome-icon
        icon="chevron-down"
        size="2x"
        class="text-white absolute bottom-1/4 left-1/2 z-10 hidden md:block"
        id="scrollChevron"
      />
    </a>
  </header>
  <RouterView />
</template>

<style>
#scrollChevron {
  animation: pulse 1.5s ease-in-out infinite alternate forwards;
}
@keyframes pulse {
  from {
    transform: scale(1);
    transform-origin: center;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(0.91);
    animation-timing-function: ease-in;
  }
  17% {
    transform: scale(0.98);
    animation-timing-function: ease-out;
  }
  33% {
    transform: scale(0.87);
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
}
</style>
