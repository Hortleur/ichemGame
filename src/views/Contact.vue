<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <main>
    <router-link to="/">
      <font-awesome-icon
        icon="chevron-down"
        class="fixed bottom-0 left-1/2 text-white"
        size="2x"
      />
    </router-link>
    <div class="flex flex-row justify-around my-10">
      <a
        href="https://www.facebook.com/ichem.brahami"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p></p>
        <div class="text-white text-center">
          <font-awesome-icon :icon="['fab', 'facebook']" size="3x" />
        </div>
      </a>

      <a href="mailto:">
        <div class="text-white text-center">
          <font-awesome-icon icon="at" size="3x" />
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/ichem-brahami-100515187/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="text-white text-center">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="3x" />
        </div>
      </a>
    </div>
  </main>
</template>
