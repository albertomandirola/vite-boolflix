<script>
import { store } from "./store";
import axios from 'axios';

import SearchBar from './components/SearchBar.vue'
import CardsList from './components/CardsList.vue'

export default {
  components: {
    SearchBar,
    CardsList
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
<template lang="">
  <div>
    <header>
      <SearchBar />
    </header>
  </div>
</template>
<style lang="">
  
</style>