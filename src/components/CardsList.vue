<script>
import CardMaker from './CardMaker.vue'
import { store } from "../store";
export default {
    name: 'CardsList',
    components: {
        CardMaker
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
        <CardMaker :card='card'/>
    </div>
</template>
<style lang="">
    
</style>