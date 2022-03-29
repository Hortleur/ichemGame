<script setup>
import PresentationSite from "../components/PresentationSite.vue";
import PresentationIchem from "../components/PresentationIchem.vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <main class="relative">
    <PresentationSite class="border-2 border-yellowIg" />
    <PresentationIchem class="border-2 border-yellowIg" />
    <div class="flex flex-row justify-center my-4">
      <router-link to="/formation">
        <button class="font-semibold p-2 rounded-full bg-blueIg text-white">
          En savoir plus
        </button>
      </router-link>
    </div>
    <router-link to="/">
      <font-awesome-icon
        icon="chevron-right"
        class="fixed top-1/2 right-3 text-white"
        size="2x"
      />
    </router-link>
  </main>
</template>
