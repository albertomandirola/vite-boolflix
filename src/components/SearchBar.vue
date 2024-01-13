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
  <div class='d-flex w-25'>
    <input type="text" class='form-control' placeholder='inserisci una scritta' v-model="store.searchValue" @keyup.enter="$emit('SearchTitle')">
    <button class="btn btn-success" @click="$emit('SearchTitle')">Cerca</button>
  </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/bootstrap' as *;
</style>