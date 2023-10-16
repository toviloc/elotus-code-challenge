import axios from 'axios';
import MovieList from '../interfaces/MovieList';
import Movie from '../interfaces/Movie';

const accessToken = process.env.REACT_APP_ACCESS_KEY_TOKEN


export const getNowPlayingMovies = async (params: { language?: string, page?: number, region?: string }) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/now_playing',
      params,
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    };
    const response = await axios.request(options);
    return {
      error: false,
      status: 'success',
      body: response.data as MovieList,
      message: ''
    };
  } catch (error) {
    return {
      error: true,
      status: "fail",
      body: {} as MovieList,
      message: "Failed to retrieve data from the Now Playing API"
    }
  }
}

export const getTopRateMovies = async (params: { language?: string, page?: number, region?: string }) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/top_rated',
      params,
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    };
    const response = await axios.request(options);
    return {
      error: false,
      status: 'success',
      body: response.data as MovieList,
      message: ''
    };
  } catch (error) {
    return {
      error: true,
      status: "fail",
      body: {} as MovieList,
      message: "Failed to retrieve data from the Top Rate API"
    }
  }
}

export const searchMovies = async (params: { query: string }) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params,
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    };
    const response = await axios.request(options);
    return {
      error: false,
      status: 'success',
      body: response.data as MovieList,
      message: ''
    };
  } catch (error) {
    return {
      error: true,
      status: "fail",
      body: {} as MovieList,
      message: "Failed to retrieve data from the Search API"
    }
  }
}

export const getMovieDetails = async (movieId: number) => {
  try {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movieId}`,
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    };
    const response = await axios.request(options);
    return {
      error: false,
      status: 'success',
      body: response.data as Movie,
      message: ''
    }
  } catch (error) {
    return {
      error: true,
      status: "fail",
      body: {} as Movie,
      message: "Failed to retrieve data from the Movie API"
    }
  }

}