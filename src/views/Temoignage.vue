<script setup>
import { RouterLink } from "vue-router";
import Video from "../components/Video.vue";
</script>
<template>
  <main class="pt-6">
    <Video
      videoSrc="https://xnwpqgpquvsfqmpenpau.supabase.co/storage/v1/object/public/portfolio/david_temoignage.mp4"
      imgSrc="https://xnwpqgpquvsfqmpenpau.supabase.co/storage/v1/object/public/portfolio/Yellow and Black Classic Maximalist Sports Football Promo Banner (1).png"
    />
    <Video
      videoSrc="https://xnwpqgpquvsfqmpenpau.supabase.co/storage/v1/object/public/portfolio/temoignage_bakari.mp4"
      imgSrc="https://xnwpqgpquvsfqmpenpau.supabase.co/storage/v1/object/public/portfolio/Yellow and Black Classic Maximalist Sports Football Promo Banner copie.png"
    ></Video>
    <Video
      videoSrc="https://xnwpqgpquvsfqmpenpau.supabase.co/storage/v1/object/public/portfolio/temoignage_monique .mp4"
      imgSrc="https://xnwpqgpquvsfqmpenpau.supabase.co/storage/v1/object/public/portfolio/Yellow and Black Classic Maximalist Sports Football Promo Banner.png"
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
