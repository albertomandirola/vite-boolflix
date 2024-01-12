<script>
import { store } from "../store";
export default {
  name: 'SearchBar',

  data() {
    return {
      store
    }
  },
}
</script>
<template lang="">
  <div>
    <input type="text" placeholder='inserisci una scritta' v-model="store.searchValue" @keyup.enter="$emit('SearchTitle')">
    <button class="btn" @click="$emit('SearchTitle')">Cerca</button>
  </div>
</template>
<style lang="">
  
</style>