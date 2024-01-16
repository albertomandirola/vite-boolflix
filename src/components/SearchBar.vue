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
  <div class='d-flex w-25 p-2'>
    <input type="text" class='form-control input' placeholder='inserisci una scritta' v-model="store.searchValue" @keyup.enter="$emit('SearchTitle')">
    <button class="btn btn-success" @click="$emit('SearchTitle')">Cerca</button>
  </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/bootstrap' as *;

.input {
  border: white;
}
</style>