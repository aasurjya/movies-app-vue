<script>
export default {
  data: () => ({
    imgTest: "",
    imgs: [],
    searchTerm: "",
  }),
  methods: {
    search() {
      if (this.searchTerm === "") {
        return;
      }

      const apiKey = "62513876"; // Replace this with your actual API key
      const searchURL = `https://www.omdbapi.com/?s=${encodeURIComponent(
        this.searchTerm
      )}&apikey=${apiKey}`;

      fetch(searchURL)
        .then((val) => val.json())
        .then((movies) => {
    if (movies.Search && movies.Search.length > 0) {
      // Movies found, update the imgs state
      this.imgs = this.parseImgResponse(movies);
    } else {
      // No movies found, display an alert
      alert("No movies found.");
    }
  })
        .catch((error) => {
          console.error("Error fetching data:", error);
          this.imgs = []; // Clear the images array in case of an error
        });
    },
    
    parseImgResponse(movies) {
      return movies.Search.reduce((acc, movie) => {
        if (!movie.Poster) {
          return acc;
        }
        acc.push({
          Poster: `${movie.Poster}`,
          Title: `${movie.Title}`,
          Type: `${movie.Type}`,
          Year: `${movie.Year}`,
          imdbID: `${movie.imdbID}`,
        });
        return acc;
      }, []);
    },
  },
  mounted() {
    // Fetch some popular movies on initial load (if required)
  
    const popURL = 'https://www.omdbapi.com/?s=Thor&apikey=62513876';
    fetch(popURL)
      .then((info) => info.json())
      .then((movies) => {
        console.log(movies);
        this.imgs = this.parseImgResponse(movies);
      });
  },
};
</script>

<template>
  <main class="p-10 bg-black text-white">
    <form @submit.prevent="search">
      <div class="flex justify-center m-auto">
        <input
          v-model="searchTerm"
          type="text"
          placeholder="Search"
          class="rounded-md w-2 lg:w-2/12 bg-gray-500 text-white pl-4"
        />
        <button type="submit" class="bg-red-500 p-2 rounded-md p-2 ml-6 text-white">
          Search
        </button>
      </div>
    </form>
    <div class="flex flex-wrap justify justify-around">
      <div v-for="img of imgs" :key="img.Title" class="w-64 bg-blue-700 p-3 rounded-md mt-4">
        <img :src="img.Poster" />
        <h1>{{ img.Title }}</h1>
        <span>{{ img.Year }}</span>
      </div>
    </div>
  </main>
</template>

<style setup>
</style>
