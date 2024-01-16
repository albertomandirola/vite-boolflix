<script>

import { store } from "../store";
export default {
    name: 'CardMakerSeries',
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
        Star() {
            return Math.ceil(this.card.vote_average / 2)
        },
        missedStar() {
            return (5 - Math.ceil(this.card.vote_average / 2))
        },
        imgUrl() {
            let posterPath = '';
            if (this.card.poster_path == null) {
                posterPath = this.card.backdrop_path
                return (`${store.urlImages}${posterPath}`)
            }
            else {
                return (`${store.urlImages}${this.card.poster_path}`)
            }

        }


    }
}
</script>
<template lang="">
<div class="my-card">
    <div class='poster-container '>
        <img :src="imgUrl" alt="">
    </div>
    <div class="card-infos">
        <div class="card-title"><strong>Titolo:</strong> {{card.name}}</div>    
        <div class="card-title"><strong>Titolo originale:</strong> {{card.original_name}}</div>
        <div class='card-original-language d-flex align-items-center justify-content-center'>
            <div><strong>OL: </strong></div>
            <img :src="FlagUrl"> 
        </div>
        <div class="d-flex justify-content-center">
          <div><strong>Voto: </strong></div>
          <div v-for='i in Star'><i class='bi bi-star-fill color_yellow'></i></div>
          <div v-for='i in missedStar'><i class='bi bi-star'></i></div>  
        </div>  
    </div>
</div>
</template>
<style lang="scss" scoped >
@use '../styles/generals.scss' as *;
@use '../styles/partials/bootstrap' as *;
@use '../styles/partials/mixins' as *;

.my-card {
    @include card;
}
</style>