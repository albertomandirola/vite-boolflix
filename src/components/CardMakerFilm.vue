<script>
import { store } from "../store";
export default {
  name: 'CardMakerFilms',
  props: {
    card: Object
  },
  data() {
    return {
      store
    }
  },
  computed: {
    FlagUrl() {

      return `https://flagsapi.com/${this.card.origin_country[0]}/flat/24.png`
    },
    vote() {
      return Math.ceil(this.card.vote_average / 2)
    },
    missedStar() {
      return (5 - Math.ceil(this.card.vote_average / 2))
    },
    imgUrl() {
      return (`${store.urlImages}${this.card.poster_path}`)
    }

  }
}
</script>
<template lang="">
<div class="my-card">
    <div class="card-infos">
        <div class="poster-container d-flex justify-content-center">
          <img :src="imgUrl" alt="">
        </div>
        <div class="card-title">{{card.title}}</div>    
        <div class="card-title">{{card.original_title}}</div>
        <div class="card-lenguage">{{card.original_language}}</div>
        <div class="d-flex">
          <div class="star" v-for='i in vote'>si</div>
          <div class="not-star" v-for='i in missedStar'>no</div>  
        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/bootstrap' as *;

.poster-container {
  width: 342px;
  min-height: 513px;
  background-color: black;
}
</style>