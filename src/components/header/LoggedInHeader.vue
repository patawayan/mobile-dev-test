<script setup lang="ts">
import {useRouter} from 'vue-router';
import { useUserStore } from '@/stores/user';

const { toggleSidebar } = useUserStore();
const {currentRoute} = useRouter();
</script>

<template>
  <header class="container align-center">
    <div id="hamburger" class="container-col" @click="toggleSidebar()">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <h1 id="headerTitle">{{ currentRoute.meta.title }}</h1>
  </header>
</template>

<style scoped>
#headerTitle {
  text-transform: capitalize;
  font-size: 2em;
}

header {
  column-gap: 30px;
}

#hamburger {
  row-gap: 5px;
  cursor: pointer;
  width: unset !important;
}

#hamburger:active {
  opacity: 0.5;
}

#hamburger > span  {
  display: block;
  width: 40px;
  height: 5px;
  background-color: white;
}
</style>
