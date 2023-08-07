
<script setup>
import Compo from "./components/Compo.vue"
import Signup from "./auth/Signup.vue";
import SignIn from "./auth/SignIn.vue";
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