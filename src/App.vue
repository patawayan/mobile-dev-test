<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { computed } from 'vue';
import { publicPages } from '@/router'
import LoggedInHeader from '@/components/header/LoggedInHeader.vue'
import SidebarMenu from './components/sidebar/SidebarMenu.vue';

import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const sidebarActive = computed(() => userStore.sidebarActive);

const {currentRoute} = useRouter();
</script>

<template>
  <template v-if="!publicPages.includes(currentRoute.path)" >
    <Transition name="slide">
      <SidebarMenu v-if="sidebarActive" />
    </Transition>
    <LoggedInHeader />
  </template>
  <!-- <LoggedInHeader  /> -->
  <RouterView />
  {{ userStore.token }}
</template>

<style scoped>
.slide-enter-active {
  animation: slide-in 0.5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
}
@keyframes slide-in {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
