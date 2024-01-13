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
        vote() {
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
    <div class="card-infos">
        <div class='poster-container'>
            <img :src="imgUrl" alt="">
        </div>
        
        <div class="card-title">Titolo:{{card.name}}</div>    
        <div class="card-title">{{card.original_name}}</div>
        <div>
            <img :src="FlagUrl"> 
        </div>
        <div class="card-vot" v-for='i in vote'><i class="bi bi-star"></i></div>
        <div class="card-vot" v-for='i in missedStar'><i class="bi bi-star"></i></div>   
    </div>
</div>
</template>
<style lang="scss" scoped >
@use '../styles/generals.scss' as *;
@use '../styles/partials/bootstrap' as *;

.poster-container {
    width: 342px;
    min-height: 513px;
    background-color: black;
}
</style>