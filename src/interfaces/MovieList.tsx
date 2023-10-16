import Movie from "./Movie"

interface MovieList {
    dates: {
        maximum: string,
        minimum: string
    },
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number
}

export default MovieList