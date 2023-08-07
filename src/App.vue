
<script setup>
import Compo from "./components/Compo.vue"
import Signup from "./components/auth/Signup.vue";
import SignIn from "./components/auth/SignIn.vue";
</script>

<template>
  <header>
    <div>
      <Compo/>
      <SignIn/>
      <Signup/> 
    </div>
  </header>
</template>

<style setup>
</style>