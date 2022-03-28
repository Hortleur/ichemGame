<script setup>
import { RouterLink } from "vue-router";
import Video from "../components/Video.vue";
</script>
<template>
  <main>
    <Video
      videoSrc="https://xnwpqgpquvsfqmpenpau.supabase.co/storage/v1/object/public/portfolio/david_temoignage.mp4"
      name="David Lefrançois"
      job="Psychologue Formateur"
      com="Rarement vu quelqu'un qui maîtrisait autant toute la matière"
      class="m-2 mt-8"
    />
    <Video
      videoSrc="https://xnwpqgpquvsfqmpenpau.supabase.co/storage/v1/object/public/portfolio/temoignage_bakari.mp4"
      name="Bakari Niakate"
      job="Entrepreneur Coach"
      com="Un homme au grand coeur"
      class="m-2"
    ></Video>
    <Video
      videoSrc="https://xnwpqgpquvsfqmpenpau.supabase.co/storage/v1/object/public/portfolio/temoignage_monique.mp4"
      name="Monique Sallaz"
      job="Docteur Neuroscience"
      com="Une vrai intelligence cognitive"
      class="m-2"
    ></Video>

    <router-link to="/">
      <font-awesome-icon
        icon="chevron-up"
        class="text-white fixed top-0 left-44"
        size="2x"
      />
    </router-link>
  </main>
</template>
