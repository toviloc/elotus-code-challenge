interface Movie {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: null,
    budget: number,
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    revenue: number,
    runtime: number,
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    genres: Genres[],
    production_companies: ProductionCompanies[],
    production_countries: ProductionCountries[],
    spoken_languages: SpokenLanguages[],
}

interface Genres {
    id: number,
    name: string
}

interface ProductionCompanies {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string
}

interface ProductionCountries {
    iso_3166_1: string,
    name: string
}
interface SpokenLanguages {
    english_name: string,
    iso_639_1: string,
    name: string
}

export default Movie