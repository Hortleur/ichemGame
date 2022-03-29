<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <router-link to="/">
      <font-awesome-icon
        icon="chevron-left"
        size="2x"
        class="absolute left-3 top-1/2 text-white"
      />
    </router-link>
  </main>
</template>
