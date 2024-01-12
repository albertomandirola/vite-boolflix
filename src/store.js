import { reactive } from 'vue';

export const store = reactive({

    apiKey: '62b98bc472bae2f735c2c119eab112c4',
    urlFilms: 'https://api.themoviedb.org/3/search/movie?api_key=',
    urlTv: 'https://api.themoviedb.org/3/search/tv?api_key=',
    searchValue: '',
    arrayFilms: [],

})