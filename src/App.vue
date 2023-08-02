<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
-->
<script setup>
// import Navbar from "./components/Navbar.vue"
import Compo from "./components/Compo.vue"
</script>

<template>
  <header>
    <div>
      <!-- <Navbar/> -->
      <Compo/>
      <!-- <p>hello from app</p> -->
    </div>
  </header>
</template>

<style setup>
</style>