<script setup lang="ts">
defineProps<{msg: string}>()
</script>

<template>
  <div class="container align-center">
    <div class="hr"><hr/></div>
    <span>{{ msg }}</span>
    <div class="hr"><hr/></div>
  </div>
</template>

<style scoped>
div.container {
  column-gap: 10px;
  width: 100%
}

span {
  color: var(--color-text-dark);
  font-weight: 700;
  font-size: 1em;
}

hr {
  border: 2px solid var(--color-border);
}

div.hr {
  flex-grow: 1;
}
</style>
