<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <main>
    <router-link to="/">
      <font-awesome-icon
        icon="chevron-down"
        class="absolute bottom-0 left-1/2 text-white"
        size="2x"
      />
    </router-link>
  </main>
</template>
