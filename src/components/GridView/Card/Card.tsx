import React from 'react'
import './Card.scss'
import Movie from '../../../interfaces/Movie'

function Card(props: { movie: Movie }) {
  const { movie: { title, poster_path, release_date, vote_average } } = props

  return (
    <div className="card">
      <img loading='lazy' src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt='poster' height={260} />
      <h2>{title}</h2>
      <span><b>Release Date:</b> {release_date}</span>
      <span><b>Vote Average:</b> {vote_average}</span>
    </div>
  )
}

export default Card
