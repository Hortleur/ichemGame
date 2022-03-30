<script setup>
import { RouterLink } from "vue-router";
import Video from "../components/Video.vue";
</script>
<template>
  <main class="pt-6">
    <Video
      videoSrc="https://xnwpqgpquvsfqmpenpau.supabase.co/storage/v1/object/public/portfolio/temoignage_david.mp4"
    />
    <Video
      videoSrc="https://xnwpqgpquvsfqmpenpau.supabase.co/storage/v1/object/public/portfolio/bakari_temoignagne.mp4"
    ></Video>
    <Video
      videoSrc="https://xnwpqgpquvsfqmpenpau.supabase.co/storage/v1/object/public/portfolio/monique_temoignage.mp4"
    ></Video>

    <router-link to="/">
      <font-awesome-icon
        icon="chevron-up"
        class="text-white fixed top-0 left-1/2"
        size="2x"
      />
    </router-link>
  </main>
</template>
