<script>
import CardMakerFilm from './CardMakerFilm.vue'
import CardMakerSeries from './CardMakerSeries.vue'
import { store } from "../store";
export default {
    name: 'CardsList',
    components: {
        CardMakerFilm,
        CardMakerSeries
    },

    data() {
        return {
            store
        }
    },
    methods: {

    },

}
</script>
<template lang="">
    <div class="col" v-for="(card, index) in store.arrayFilms" :key="index">
        <CardMakerFilm :card='card'/>
    </div>
    <div class="col" v-for="(card, index) in store.arraySeries" :key="index">
        <CardMakerSeries :card='card'/>
    </div>
</template>
<style lang="">
    
</style>