import React from 'react'
import "../Styles/songcard.css"
import AlbumImage from './AlbumImage'
import AlbumInfo from './AlbumInfo'

const SongCard = ({album}) => {
  return (
    <div className='songcard-body'>
      <AlbumImage url={album?.images[0]?.url}></AlbumImage>
      <AlbumInfo album={album}></AlbumInfo>
    </div>
  )
}

export default SongCard
