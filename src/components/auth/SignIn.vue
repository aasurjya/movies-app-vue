<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900">
    <div class="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 class="text-3xl font-bold mb-6 text-center text-white">Sign In</h2>
      <form>
        <div class="mb-4">
          <label class="block text-gray-300 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input
            class="w-full px-3 py-2 placeholder-gray-500 border rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
            type="text"
            id="username"
            placeholder="Enter your username"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-300 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="w-full px-3 py-2 placeholder-gray-500 border rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div class="flex justify-center">
          <button
            class="transition duration-300 ease-in-out bg-purple-600 hover:bg-indigo-600 transform hover:-translate-y-1 hover:scale-110 focus:outline-none text-white font-bold py-2 px-4 rounded-lg"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
/* Import Tailwind CSS */
@import '../../assets/index.css';
</style>
