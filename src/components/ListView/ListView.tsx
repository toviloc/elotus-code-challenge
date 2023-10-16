import React from 'react'
import './ListView.scss'
import Record from './Record/Record'
import Movie from '../../interfaces/Movie'

function ListView(props: { moviesList: Movie[], handleOnClick: Function }) {
    const { moviesList, handleOnClick } = props
    return (
        <>
            {moviesList.map((e, index) => (
                <div className='listContent' key={index} onClick={() => handleOnClick(e)}>
                    <Record movie={e} />
                </div>
            ))}
        </>
    )
}

export default ListView
