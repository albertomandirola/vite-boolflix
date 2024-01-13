import { reactive } from 'vue';

export const store = reactive({

    apiKey: '62b98bc472bae2f735c2c119eab112c4',
    urlFilms: 'https://api.themoviedb.org/3/search/movie?api_key=',
    urlSeries: 'https://api.themoviedb.org/3/search/tv?api_key=',
    urlImages: 'https://image.tmdb.org/t/p/w342',
    searchValue: '',
    arrayFilms: [],
    arraySeries: []

})