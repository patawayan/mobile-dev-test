<script setup lang="ts">
import LoginForm from './LoginForm.vue';
import UserAvatar from './UserAvatar.vue'

</script>

<template>
  <div id="login-container" class="container-col align-center">
  <div class="container-col align-center">
    <h1>Flutter Exam 01</h1>
    <h1>Tri7Solution</h1>
  </div>

  <UserAvatar/>

  <LoginForm/>

  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2rem;
  font-style: italic;
}

#login-container {
  row-gap: 32px;
}
</style>
