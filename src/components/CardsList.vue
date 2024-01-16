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
    <div class="row justify-content-center gap-3">
        <div class="col-12 py-3 " v-if="store.arrayFilms != 0 ? true : false">
            Film correlati alla ricerca
        </div>
        <div class="my-col" v-for="(card, index) in store.arrayFilms" :key="index">
            <CardMakerFilm :card='card'/>
        </div>
    </div>
    <div class="row justify-content-center gap-3">
        <div class="col-12 py-3 " v-if="store.arraySeries != 0 ? true : false">
            Serie tv correlate alla ricerca
        </div>
        <div class="my-col " v-for="(card, index) in store.arraySeries" :key="index">
            <CardMakerSeries :card='card'/>
        </div>
    </div>
    
   
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/bootstrap' as *;

.my-col {
    width: 342px;
    padding: 0px;
}
</style>