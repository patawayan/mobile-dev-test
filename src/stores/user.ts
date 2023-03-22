import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from 'firebase/auth'



export const useUserStore = defineStore('user', () => {
  const loggedIn = ref(false);
  const username = ref('');
  const displayName = ref('')
  const photo = ref();
  const sidebarActive = ref(false);
  // const doubleCount = computed(() => count.value * 2)

  function toggleSidebar() {
    sidebarActive.value = !sidebarActive.value;
  }

  function setLoginUser(user:string) {
    username.value = user;
    loggedIn.value = true;

    if (!displayName.value) {
      displayName.value = user;
    }

  }

  function setLoginUserFirebase(user:User) {
    setLoginUser(user.email || user.displayName || 'username');
    displayName.value = user.displayName || ''
    photo.value = user.photoURL
    console.log('picz', user);
    console.log('picz', photo);
  }

  function doLogout () {
    username.value = '';
    loggedIn.value = false;
    displayName.value ='';
  }

  return {
    loggedIn,
    username,
    photo,
    sidebarActive,
    displayName,
    setLoginUser,
    setLoginUserFirebase,
    doLogout,
    toggleSidebar
  }
})
