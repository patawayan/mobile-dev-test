<script setup lang="ts">
import { ref, computed } from 'vue';
import { useUserStore } from '@/stores/user';

const useDefault = ref(false);
const defaultSrc = '/profile.png';
const userStore = useUserStore();

const photoSrc = computed(() => userStore.photo ?? defaultSrc)

</script>

<template>
  <img
    :src="useDefault ? defaultSrc: photoSrc"
    width="128"
    height="128"
    @error="e => useDefault = true"
  />
</template>

<style scoped>
img {
  border-radius: 50%;
}
</style>
