<script>
import axios from 'axios';
import { store } from "./store";


import SearchBar from './components/SearchBar.vue'
import CardsList from './components/CardsList.vue'

export default {
  components: {
    SearchBar,
    CardsList
  },
  data() {
    return {
      store
    }
  },
  methods: {
    reciveEmit() {
      //create variable that allow us to create the filtered arrey
      let urlFilteredFilms = `${store.urlFilms}${store.apiKey}&query=${store.searchValue}`
      let urlFilteredSeries = `${store.urlSeries}${store.apiKey}&query=${store.searchValue}`
      //array with the scope of contain the serched film
      store.arrayFilms = [];
      store.arraySeries = [];

      //creation of it with axios
      axios.get(urlFilteredFilms).then(response => {
        store.arrayFilms = [...response.data.results];
        console.log(store.arrayFilms);

      })

      axios.get(urlFilteredSeries).then(response => {
        store.arraySeries = [...response.data.results];
        console.log(store.arraySeries);

      })

    }
  },
  created() {

  },
}
</script>
<template lang="">
  <div>
    <header>
      <SearchBar @SearchTitle='reciveEmit' />
    </header>
    <main><CardsList /></main>
  </div>
</template>
<style lang="scss" scoped>
@use './styles/generals.scss' as *;
</style>