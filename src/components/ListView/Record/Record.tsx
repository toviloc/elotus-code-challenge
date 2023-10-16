import React from 'react'
import './Record.scss'
import Movie from '../../../interfaces/Movie'

function Record(props: { movie: Movie }) {
    const { movie: { title, poster_path, release_date, overview } } = props
    return (
        <div className="record">
            <div className='imgContent'>
                <img loading='lazy' src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt='poster' height={160} />
            </div>
            <div className='recordContent'>
                <h2>{title}</h2>
                <span><b>Release Date:</b> {release_date}</span>
                <div className='ellipsis'>
                    <div>
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Record
