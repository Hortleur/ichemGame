<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="flex flex-col justify-between h-screen text-white">
    <div class="text-center flex flex-col">
      <router-link to="/contact">
        <div class="flex flex-col">
          <font-awesome-icon icon="chevron-up" size="2x" />
          <span>Info et Contact</span>
        </div>
      </router-link>
    </div>
    <div class="flex flex-row justify-between mx-1">
      <router-link to="/presentation">
        <div class="flex flex-row">
          <font-awesome-icon icon="chevron-left" size="2x" />
          <span>Présentation</span>
        </div>
      </router-link>
      <router-link to="/formation">
        <div class="flex flex-row">
          <span>Formations</span>
          <font-awesome-icon icon="chevron-right" size="2x" />
        </div>
      </router-link>
    </div>
    <div class="text-center">
      <router-link to="/temoignage">
        <div class="flex flex-col">
          <span>Témoignages</span>
          <font-awesome-icon icon="chevron-down" size="2x" />
        </div>
      </router-link>
    </div>
  </main>
</template>

<style></style>
