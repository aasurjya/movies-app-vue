import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '../components/auth/SignIn.vue'
import Signup from '../components/auth/Signup.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signup',
      name: 'SignUp',
      component: Signup
    },

    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    }
  ]
})