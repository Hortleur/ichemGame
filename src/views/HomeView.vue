<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="bg-gradient-to-b from-cielIg via-cielIg to-blueIg min-h-screen">
    <div class="mb-5">
      <img src="../assets/ichem.png" alt="photo d'ichem" class="-z-10 pr-2" />
      <div class="-mt-44 z-10 pl-1">
        <span class="text-xs">Animer avec la force des neurosciences cognitives</span>
        <h1 class="text-xl font-bold underline underline-offset-2">FORMATEUR-COACH</h1>
        <p class="text-sm">
          Je t'aide à créer
          <span class="text-lg text-blueIg font-bold"
            >TA FORMATION CLE <br />
            EN MAIN</span
          >
          prête à être vendue en 3 mois <br />
          <span class="text-lg text-blueIg font-bold">EN GAGNANT DU TEMPS</span> <br />
          sur les techniques d'animation et <br />
          qui font un sens pour toi
        </p>
        <p>
          <font-awesome-icon icon="circle-check" class="text-blueIg" />
          <span class="text-sm">
            Tout en prenant du plaisir à transmettre du contenu travaillé</span
          >
        </p>
        <p>
          <font-awesome-icon icon="circle-check" class="text-blueIg" />
          <span class="text-sm">
            De qualité basée sur les dernières recherches en neurosciences
            comportementales</span
          >
        </p>
        <p>
          <font-awesome-icon icon="circle-check" class="text-blueIg" />
          <span class="text-sm">
            Avec l'accompagnement d'un formateur professionnel d'aldultes diplômé</span
          >
        </p>
      </div>
    </div>
    <div class="">
      <div class="h-full mx-2 rounded-lg">
        <iframe
          class="h-96 rounded-md w-full"
          src="https://www.youtube.com/embed/E0vwWWo5L4Q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="flex flex-col items-center mt-4">
        <button
          class="my-4 ring-2 ring-yellowIg py-3 rounded-br-lg rounded-tl-lg w-1/2 bg-white text-lg font-semibold"
        >
          <Router-link to="/video">
            En voir plus ? <font-awesome-icon icon="chevron-right" />
          </Router-link>
        </button>
      </div>
    </div>
  </main>
</template>

<style></style>
