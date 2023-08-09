<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900">
    <div class="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 class="text-3xl font-bold mb-6 text-center text-white">Sign Up</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label class="block text-gray-300 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input
            class="w-full px-3 py-2 placeholder-gray-500 border rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
            type="text"
            id="username"
            v-model="UserName"
            placeholder="Enter your username"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-300 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="w-full px-3 py-2 placeholder-gray-500 border rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
            type="email"
            id="email"
            v-model="Email"
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-300 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="w-full px-3 py-2 placeholder-gray-500 border rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
            type="password"
            v-model="Password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div class="flex justify-center">
          <button
            @click="submitForm"
            class="relative transition duration-300 ease-in-out bg-purple-600 hover:bg-indigo-600 transform hover:-translate-y-1 hover:scale-110 focus:outline-none text-white font-bold py-2 px-4 rounded-lg"
            type="submit"
          >
            Sign Up
            <span
              class="absolute top-0 right-0 -mr-2 -mt-2 rounded-full h-4 w-4 bg-purple-800 animate-ping"
            ></span>
            <span
              class="absolute top-0 right-0 -mr-2 -mt-2 rounded-full h-4 w-4 bg-purple-600 animate-ping"
            ></span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
        UserName: "",
        Email: "",
        Password: ""
      }
    },
    methods: {
    submitForm() {
      const formData= {
        uName: this.UserName,
        email: this.Email,
        pass: this.Password
        
      };
      console.log("Form submitted!");
      console.log(formData)
    },
  },
};
</script>

<style>
/* Import Tailwind CSS */
@import '../../assets/index.css';

/* Button animation */
@keyframes ping {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>
