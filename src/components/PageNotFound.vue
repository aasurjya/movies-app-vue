<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-green-400">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-white mb-4">404</h1>
      <p class="text-xl text-gray-200 mb-8">Page Not Found</p>
      <button
        @click="showCharacter = !showCharacter"
        class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition duration-300 ease-in-out"
      >
        Go To Home Page
      </button>
      <transition name="bounce" mode="out-in">
        <div v-if="showCharacter" key="character" class="mt-8">
          <!-- Animated character goes here -->
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
let showCharacter = false;
</script>

<style scoped>
.bounce-enter-active,
.bounce-leave-active {
  animation: bounce 0.5s ease-in-out;
}
.bounce-enter,
.bounce-leave-to {
  transform: translateY(0);
}
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
