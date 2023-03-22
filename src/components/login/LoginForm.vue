<script setup lang="ts">
import DividerText from './DividerText.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

import {staticLogin, googleLogin, fbLogin, signInWithRedirectLabel, postRedirectSignIn} from '@/firebase/login'
import type {LoginResultInterface} from '@/firebase/login';

const loginError = ref('');
const loading = ref(false);
const router = useRouter();

const doLogin = async (loginFunc:(() => Promise<LoginResultInterface>)) => {
  loginError.value = '';
  loading.value = true;
  try {
    const {success, message = '' } = await loginFunc();
   if (success) {
    router.push('/')
   } else {
    loginError.value = message;
   }
  } finally {
    loading.value = false;
  }
}

const doStaticLogin = async (e:any) => {
  doLogin(() => {
    return staticLogin(e.target[0].value, e.target[1].value);
  })
};

if (localStorage.getItem(signInWithRedirectLabel) === 'true') {
  localStorage.removeItem(signInWithRedirectLabel)
  doLogin(postRedirectSignIn)
}


</script>

<template>
  <form class="container-col align-center login-forms"
    @submit.prevent="doStaticLogin"
    >
    <div v-if="loginError" class="error">{{ loginError }}</div>
    <input placeholder="Username..." required :disabled="loading" />
    <input type="password" placeholder="Password..." required :disabled="loading" />

    <button type="submit" class="dark rounded" :disabled="loading" >
      <span v-if="loading">Loading</span>
      <span v-else>Login</span>
    </button>
  </form>
  <DividerText msg="OR"/>
  <div class="container-col login-forms">
    <button
      disabled
      @click="doLogin(fbLogin)">
      Login with Facebook
    </button>
    <button
      disabled
      @click="doLogin(googleLogin)">
      Login with Google
    </button>
  </div>
</template>

<style scoped>
.login-forms {
  row-gap: 15px;
}

.error {
  color: darkred;
}

</style>
