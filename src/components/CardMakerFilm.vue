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
  }
}
</script>
<template lang="">
<div class="card">
    <div class="card-infos">
        <div class="card-title">{{card.title}}</div>    
        <div class="card-title">{{card.original_title}}</div>
        <div class="card-lenguage">{{card.original_language}}</div>    
        <div class="card-vot">{{card.vote_average}}</div>    
    </div>
</div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/bootstrap'
</style>