<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <section
    id="pres"
    class="mx-1 bg-darkblue bg-opacity-90 text-white my-2 p-2 rounded-3xl"
  >
    <div class="w-1/3 float-right mt-36">
      <img
        src="../assets/ichem1.png"
        alt="Photo d'ichem"
        class="bg-gradient-to-tl from-darkblue to-yellowIg rounded-tl-3xl rounded-br-3xl"
      />
    </div>

    <div>
      <span class="text-sm font-semibold"
        >Animer avec la force des neurosciences cognitives</span
      >
      <h1 class="font-bold text-xl underline underline-offset-4">FORMATEUR-COACH</h1>
      <p>
        Je t'aide à créer
        <span class="text-lg font-bold text-blueIg">TA FORMATION CLE EN MAIN</span>
        prête à être vendu en 3 mois
        <span class="text-lg text-blueIg font-bold">EN GAGNANT DU TEMPS</span> sur les
        techniques d'animation et qui font un sens pour toi
      </p>
      <p>
        <font-awesome-icon icon="circle-check" size="xl" class="text-blueIg" /> Tout en
        prenant du plaisir à transmettre du contenu travaillé
      </p>
      <p>
        <font-awesome-icon icon="circle-check" size="xl" class="text-blueIg my-2" /> De
        qualité basée sur les dernières recherches en neurosciences comportementales
      </p>
      <p>
        <font-awesome-icon icon="circle-check" size="xl" class="text-blueIg" /> Avec
        l'accompagnement d'un formateur professionnel d'adulte diplômé
      </p>
    </div>
    <div class="flex flex-row justify-center mt-4">
      <router-link to="/formation">
        <button class="font-semibold p-2 rounded-full bg-blueIg">En savoir plus</button>
      </router-link>
    </div>
  </section>
</template>
