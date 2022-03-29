<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <transition :name="route.meta.transition || fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<style>
.slide-top-enter-active,
.slide-top-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-top-enter-from,
.slide-top-leave-to {
  opacity: 0;
  transform: translateY(50%);
}
.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-50%);
}
.slide-down-enter-active,
.slide-down-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-50%);
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(50%);
}
</style>
