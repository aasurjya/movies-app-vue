<div v-if="movieData && movieData.length > 0">
  <div v-for="movie in movieData" :key="movie.imdbID" class="w-64 bg-purple-300 p-3 rounded-md mt-4">
    <img :src="movie.Poster" alt="Movie Poster" />
    <h1>{{ movie.Title }}</h1>
    <span>{{ movie.Year }}</span>
  </div>
</div>

<div v-else class="w-64 bg-purple-300 p-3 rounded-md mt-4">
  No movies found.
</div>
