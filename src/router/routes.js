// import Vue from 'vue'
// import Router from 'vue-router'
// import SignIn from '../components/auth/SignIn.vue'
// import Signup from '../components/auth/Signup.vue'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/signup',
//       name: 'SignUp',
//       component: Signup

//     },

//     {
//       path: '/signin',
//       name: 'SignIn',
//       component: SignIn
//     }
//   ]
// })

// <!-- <script setup>
// import { ref, computed } from 'vue'
// import SignIn from '../components/auth/SignIn.vue'
// import SignUp from '../components/auth/Signup.vue'


// const routes = {
//   '/signin': SignIn,
//   '/signup':SignUp
// }

// const currentPath = ref(window.location.hash)

// window.addEventListener('hashchange', () => {
//   currentPath.value = window.location.hash
// })

// const currentView = computed(() => {
//   return routes[currentPath.value.slice(1) || '/'] || NotFound
// })
// </script>

// <template>
//   <a href="#/">Home</a> |
//   <a href="#/about">About</a> |
//   <a href="#/non-existent-path">Broken Link</a>
//   <component :is="currentView" />
// </template> -->

import { ref, computed } from 'vue'
import SignIn from '../components/auth/SignIn.vue'
import SignUp from '../components/auth/Signup.vue'
import Compo from "../components/Compo.vue"

const routes = {
  '/': Compo,
  '/signin': SignIn,
  '/signup': SignUp
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

export { routes, currentPath, currentView }