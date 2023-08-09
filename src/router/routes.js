import { createRouter, createWebHistory} from "vue-router";
import SignIn from "../components/auth/SignIn.vue";
import signup from '../components/auth/Signup.vue'
import PageNotFound from '../components/PageNotFound.vue'
import Home from "../components/Compo.vue"


const router = createRouter({
  history: createWebHistory(),
  routes: [
        {
      path: "/",
      component: Home
    },
    {
      path: '/signup',
      component: signup
    },

    {
      path: '/signin',
      component: SignIn
    },

    {
      path: '/users/:id',
      component: null
    },
    {
      path: '/:notFound(.*)',
      component: PageNotFound
    }

  ]
})

export default router;