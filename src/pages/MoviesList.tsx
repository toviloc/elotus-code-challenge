import React, { useEffect, useState } from 'react'
import { getMovieDetails, getNowPlayingMovies, getTopRateMovies, searchMovies } from '../services/apiService';
import Movie from '../interfaces/Movie';
import Header from '../components/Header/Header';
import Loading from '../components/Loading/Loading';
import Snackbar from '../components/Snackbar/Snackbar';
import GridView from '../components/GridView/GridView';
import Modal from '../components/Modal/Modal';
import ListView from '../components/ListView/ListView';

function MoviesList() {
  const [moviesList, setMoviesList] = useState<Movie[] | []>([])
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [movieDetail, setMovieDetail] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [isGridView, setIsGridView] = useState(true)

  const fecthMovieDetails = async (movieId: number) => {
    setIsLoading(true)
    const res = await getMovieDetails(movieId);
    if (!res.error) {
      setMovieDetail(res.body)
    } else {
      setIsError(true)
      setErrorMessage(res.message)
    }
    setIsLoading(false)
  }

  const fetchNowPlayingMovies = async () => {
    setIsLoading(true)
    const res = await getNowPlayingMovies({});
    if (!res.error) {
      setMoviesList(res.body.results);
    } else {
      setIsError(true)
      setErrorMessage(res.message)
    }
    setIsLoading(false)
  }

  const fetchTopRateMovies = async () => {
    setIsLoading(true)
    const res = await getTopRateMovies({});
    if (!res.error) {
      setMoviesList(res.body.results);
    } else {
      setIsError(true)
      setErrorMessage(res.message)
    }
    setIsLoading(false)
  }

  const handleSearchMovies = async (query: string) => {
    setIsLoading(true)
    const res = await searchMovies({ query });
    if (!res.error) {
      if (res.body.total_results === 0) {
        setIsError(true)
        setErrorMessage("The movies are not found")
      } else {
        setMoviesList(res.body.results);
      }
    } else {
      setIsError(true)
      setErrorMessage(res.message)
    }
    setIsLoading(false)
  }

  const handleOnClick = (movie: Movie) => {
    setIsShowDetail(true);
    fecthMovieDetails(movie.id)
  }

  const handleCloseSnackbar = () => {
    setIsError(false)
  }

  useEffect(() => {
    fetchNowPlayingMovies()
  }, [])

  return (
    <div>
      <Header isGridView={isGridView} toggleView={setIsGridView} getNowPlayingMovies={fetchNowPlayingMovies} getTopRateMovies={fetchTopRateMovies} searchMovies={handleSearchMovies} />
      {isLoading ? (<Loading />) : (<>
        {isGridView ? <GridView moviesList={moviesList} handleOnClick={handleOnClick} /> : <ListView moviesList={moviesList} handleOnClick={handleOnClick} />}
        {isShowDetail && <Modal movieDetail={movieDetail} setIsShowDetail={setIsShowDetail} />}
        {isError && <Snackbar message={errorMessage} isOpen={isError} onClose={handleCloseSnackbar} />}
      </>)
      }
    </div>
  )
}

export default MoviesList
