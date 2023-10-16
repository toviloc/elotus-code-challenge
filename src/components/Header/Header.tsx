import React, { useState } from 'react'
import { FaList, FaSearch } from "react-icons/fa";
import './Header.scss'

function Header(props: { isGridView: boolean, getNowPlayingMovies: Function, getTopRateMovies: Function, searchMovies: Function, toggleView: Function }) {
  const { isGridView, getNowPlayingMovies, getTopRateMovies, searchMovies, toggleView } = props
  const [searchKey, setSearchKey] = useState('')
  function handleOnKeyPress(e: any) {
    if (e.key === "Enter") {
      e.preventDefault();
      searchMovies(searchKey);
    }
  }
  return (
    <div className='header'>
      <div className='tabs'>
        <div className='tab' onClick={() => getNowPlayingMovies()}>Now Playing</div>
        <div className='tab' onClick={() => getTopRateMovies()}>Top Rate</div>
      </div>
      <div className='btn'>
        <div className='switchBtn'>
          <button onClick={() => toggleView(!isGridView)}><FaList /></button>
        </div>
        <div className='search'>
          <div>
            <input type='text' className='inputSearch' placeholder='Search...' value={searchKey} onChange={e => setSearchKey(e.target.value)} onKeyUp={e => handleOnKeyPress(e)} />
          </div>
          <div className='searchBtn'>
            <button className='searchIcon' onClick={() => searchMovies(searchKey)}>
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
