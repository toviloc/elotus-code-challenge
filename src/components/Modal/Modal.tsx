import React from 'react'
import './Modal.scss'
import Movie from '../../interfaces/Movie'

function Modal(props: { movieDetail: Movie | null, setIsShowDetail: Function }) {
    const { movieDetail, setIsShowDetail } = props
    return (
        <div className="openModal">
            <div className="proceeds-modal">
                <div className='modalContent'>
                    <img loading='lazy' src={`https://image.tmdb.org/t/p/w500/${movieDetail?.backdrop_path}`} alt='poster' />
                    <h2>{movieDetail?.title}</h2>
                    <span><b>Genres:</b> {movieDetail?.genres.map(e => e.name).join(', ')}</span>
                    <span><b>Overview:</b> {movieDetail?.runtime} minutes</span>
                    <span><b>Vote Average:</b> {movieDetail?.vote_average}</span>
                    <span><b>Vote Count:</b> {movieDetail?.vote_count}</span>
                    <span><b>Status:</b> {movieDetail?.status}</span>
                    <span><b>Release Date:</b> {movieDetail?.release_date}</span>
                    <span><b>Tag Line:</b> {movieDetail?.tagline}</span>
                    <p><b>Overview:</b> {movieDetail?.overview}</p>
                    <button className='closeBtn' onClick={() => setIsShowDetail(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
