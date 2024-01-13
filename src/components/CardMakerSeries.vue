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
        }

    }
}
</script>
<template lang="">
<div class="card">
    <div class="card-infos">
        <div class="card-title">{{card.name}}</div>    
        <div class="card-title">{{card.original_name}}</div>
        <img :src="FlagUrl">   
        <div class="card-vot" v-for='i in vote'><i class="bi bi-star"></i></div>
        <div class="card-vot" v-for='i in missedStar'><i class="bi bi-star"></i></div>   
    </div>
</div>
</template>
<style lang="scss" >
@use '../styles/partials/bootstrap' as *;
</style>