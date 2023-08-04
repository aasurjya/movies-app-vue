<script>
const URL =  'http://www.omdbapi.com/?s=avengers&apikey=62513876';
const popURL =  'http://www.omdbapi.com/?s=avengers&apikey=62513876';
const imgTest = ""

export default {
  
    data: ()=> ({
        imgTest: imgTest,
        imgs:[],
        searchTerm: ""
    }),
      methods:{
        search(){
          if(this.searchTerm=== ""){
            return;
          }


          fetch(URL)
          .then((val)=> val.json())
          .then((movies)=>{
             this.imgs = this.parseImgResponse(movies);
          }
        )
      },
      parseImgResponse(movies){
        return  movies.Search.reduce((acc, movie)=>{
                    if(!movie.Poster){
                        return acc
                    }
                    acc.push({
                        Poster: `${movie.Poster}`,
                        Title: `${movie.Title}`,
                        Type: `${movie.Type}`,
                        Year: `${movie.Year}`,
                        imdbID: `${movie.imdbID
}`
                    })
                    return acc
                },[]);
      }
          
        
        
      
      },
        








    mounted(){
        fetch(popURL).then(
            (info)=> info.json()
        ).then(
            (movies)=>{
                console.log(movies);
                this.imgs= movies.Search.reduce((acc, movie)=>{
                    if(!movie.Poster){
                        return acc
                    }
                    acc.push({
                        Poster: `${movie.Poster}`,
                        Title: `${movie.Title}`,
                        Type: `${movie.Type}`,
                        Year: `${movie.Year}`,
                        imdbID: `${movie.imdbID
}`
                    })
                    return acc
                },[]);
            }
        )
    }

}
</script>

<template>
  
  <main class="p-10 bg-black">
      <form @submit.prevent="search">
        <div class="flex justify-center m-auto">
          <input v-model="searchTerm" type="text" placeholder="Search" class="rounded-md w-2 lg:w-2/12 bg-gray-500 text-white pl-4">
          <button @click="search" class="bg-red-500 p-2 rounded-md p- 2 ml-6 text-white">Search</button>
        </div>
      </form>
    <div class="flex flex-wrap justify justify-around">
    <div v-for="img of imgs" :key="img.Title" class="w-64 bg-purple-300 p-3 rounded-md mt-4">
      <img :src="img.Poster"/>
      <h1>{{ img.Title }}</h1>
      <span>{{ img.Year }}</span>
      </div>
      {{ imgs }}
      </div>
  </main>
</template>

<style setup>
</style>