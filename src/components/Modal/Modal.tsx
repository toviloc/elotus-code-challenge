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
                    <span><b>Release Date:</b> {movieDetail?.release_date}</span>
                    <span><b>Running Time:</b> {movieDetail?.runtime}</span>
                    <p><b>Overview:</b> {movieDetail?.overview}</p>
                    <button className='closeBtn' onClick={() => setIsShowDetail(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
