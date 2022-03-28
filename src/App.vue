<script setup>
import { RouterLink, RouterView } from "vue-router";
import { reactive, ref } from "vue";

const showMenu = ref(false);

function show() {
  this.showMenu = !this.showMenu;
}
</script>

<template>
  <header class="flex flex-col bg-gradient-to-b from-blueIg to-cielIg pb-4">
    <div v-if="!showMenu" class="flex flex-row items-center justify-between mx-2">
      <img
        src="./assets/logo.png"
        alt="IchemGame, le coach de votre je(u)"
        class="w-32"
      />
      <div>
        <button @click="show()">
          <font-awesome-icon icon="bars" size="2x" class="text-white" />
        </button>
      </div>
    </div>
    <div v-if="showMenu" class="flex flex-row items-center justify-between mx-2 h-20">
      <nav class="text-md font-semibold flex">
        <div id="navItem">
          <RouterLink to="/"
            ><font-awesome-icon icon="house" size="xl" class="text-white"
          /></RouterLink>
        </div>

        |
        <div id="navItem">
          <RouterLink to="/about"
            ><font-awesome-icon icon="video" size="xl" class="text-white"
          /></RouterLink>
        </div>

        |
        <div id="navItem">
          <Router-link to="/contact"
            ><font-awesome-icon icon="graduation-cap" size="xl" class="text-white"
          /></Router-link>
        </div>

        |
        <div id="navItem">
          <Router-link to="/formation"
            ><font-awesome-icon icon="address-book" size="xl" class="text-white"
          /></Router-link>
        </div>
      </nav>
      <div>
        <button @click="show()">
          <font-awesome-icon icon="times" size="2x" class="text-white" />
        </button>
      </div>
    </div>
  </header>
  <RouterView />
</template>

<style>
#navItem {
  margin-left: 20px;
  margin-right: 20px;
}
</style>
