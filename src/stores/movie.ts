import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

type movie = {
    id: string,
    poster_path:string,
    title: string,
    overview: string,
    release_date: string,
    adult: boolean,
    vote_average: number
}

export const useMovieStore = defineStore('movie', () => {
    const topRatedList = ref<Array<movie>>([])
    const getTopRatedList = computed(() => topRatedList.value)
    function setTopRatedList() {
        
    }
})