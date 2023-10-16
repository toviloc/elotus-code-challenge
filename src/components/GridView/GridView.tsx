import React from 'react'
import Card from './Card/Card'
import Movie from '../../interfaces/Movie'
import './GridView.scss'

function GridView(props: { moviesList: Movie[], handleOnClick: Function }) {
    const { moviesList, handleOnClick } = props
    return (
        <div className='movieContent'>
            {moviesList.map((e, index) => (
                <div key={index} onClick={() => handleOnClick(e)}>
                    <Card movie={e} />
                </div>
            ))}
        </div>
    )
}

export default GridView
