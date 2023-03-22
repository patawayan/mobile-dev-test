<script setup lang="ts">
import UserAvatar from '../login/UserAvatar.vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

const { toggleSidebar, displayName, doLogout } = useUserStore();

const {currentRoute, push} = useRouter();

const sidebarLinks = [
  {label: 'Data management', onclick: () => push('/')},
  {label: 'Factorial', onclick: () => push('/factorial')},
  {label: 'Logout', onclick: () => { doLogout(); push('/login')}}
];

</script>

<template>
  <div id="sidebar-menu-container" class="container" @click="toggleSidebar">
    <div id="sidebar-menu" class="container-col align-center">
      <UserAvatar id="avatar"  />
      <h1>{{ displayName }}</h1>

      <div id="menu" class="container-col">
        Menu
        <span class="sidebar-link" v-for="link in sidebarLinks" :key="link.label" @click="link.onclick">
          - {{ link.label }}
        </span>
      </div>

    </div>
    <div id="exit-sidebar">
    </div>
  </div>
</template>

<style scoped>
img {
  border-radius: 50%;
}

#avatar{
  height: 300px;
  width: 300px;
}

#sidebar-menu-container {
  z-index: 10000;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
}

#exit-sidebar {
  height: 100%;
  width: 10%;
  background-color: var(--color-background);
  cursor: pointer;
}

#sidebar-menu {
  background-color: var(--color-side-bar);
  height: 100%;
  width: 90%;
  padding: 50px 0px;
  row-gap: 20px;
}

#menu {
  font-size: 2em;
  padding: 20px
}

.sidebar-link:active {
  opacity: 0.5;
}
</style>
