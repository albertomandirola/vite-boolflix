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
    },
    FlagUrl() {
      return `https://flagsapi.com/${this.card.original_language.toUpperCase()}/flat/24.png`
    },
    languageIcon() {
      let icon = 'lang-icon lang-icon-'
      icon = `${icon}${this.card.original_language}`
      return icon
    },

  }
}
</script>
<template lang="">
<div class="my-card">
  <div class="poster-container ">
      <img :src="imgUrl" alt="">
  </div>
  <div class="card-infos">
    <div class="card-title"><strong>Titolo:</strong> {{card.title}}</div>    
    <div class="card-title"><strong>Titolo originale:</strong> {{card.original_title}}</div>
    <div class="card-language">
      <strong>OL: </strong>
          <span :class='languageIcon'></span>
        </div>
        <div class="d-flex justify-content-center">
          <strong>Voto: </strong>
          <div class="star" v-for='i in vote'><i class='bi bi-star-fill color_yellow'></i></div>
          <div class="not-star" v-for='i in missedStar'><i class='bi bi-star'></i></div>  
        </div>
        <div class="card-overview"><strong>Overview: </strong>{{card.overview}}</div>

      </div>
</div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/bootstrap' as *;
@use '../styles/partials/mixins' as *;

.my-card {
  @include card;
}
</style>