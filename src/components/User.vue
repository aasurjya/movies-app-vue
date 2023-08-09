<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <transition name="fade" mode="out-in">
      <div class="max-w-xl bg-white p-8 shadow-md rounded-lg" :key="user.name">
        <div class="flex items-center">
          <img
            class="w-12 h-12 rounded-full mr-4 transform hover:scale-105 transition-transform duration-200"
            :src="user.avatar"
            :alt="user.name"
          />
          <h1 class="text-2xl font-bold">{{ user.name }}</h1>
        </div>
        <div class="mt-4">
          <p class="text-gray-600">{{ user.bio }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "John Doe",
        avatar: "https://placeimg.com/100/100/people",
        bio: "Passionate developer and adventurer."
      }
    };
  }
};
</script>

<style>
/* Add your custom styles here */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
