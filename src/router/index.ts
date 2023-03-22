import { createRouter, createWebHistory } from 'vue-router'
import { useCurrentUser } from 'vuefire'
import { useUserStore } from '@/stores/user'

export const publicPages = ['/login'];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'data',
      meta: {
        title: 'Data Management'
      },
      component: () => import('../views/DataView.vue')
    },
    {
      path: '/factorial',
      name: 'factorial',
      meta: {
        title: 'Factorial'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FactorialView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    }
  ]
})


router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  console.log('test',to)

  const authRequired = !publicPages.includes(to.path);
  const user = useCurrentUser()
  const { loggedIn, setLoginUserFirebase} = useUserStore();

  console.log('hughser', user.value, loggedIn);
  if (user.value && !loggedIn) {
    setLoginUserFirebase(user.value);
    console.log('loggedIn', loggedIn);
  }

  if (authRequired && !loggedIn) {
    return '/login';
  } else if(!authRequired && loggedIn){
    return '/';
  }


});

export default router
