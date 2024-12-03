import React from 'react'
import '../Styles/widgetcard.css'
import WidgetEntry from './WidgetEntry'

const WidgetCard = ({title, similar, featured, newRelease}) => {
  return (
    <div className='widget-card-body'>
        <p className='widget-title'>{title}</p>
        {
            similar ? similar.map((artist)=>{
                return(
                    <WidgetEntry
                    title={artist?.name}
                    subtitle={artist?.followers?.total + " Followers"}
                    img={artist?.images[2]?.url}
                    ></WidgetEntry>
                )
            }) : featured ? featured.map((playlists)=>{
                return(
                    <WidgetEntry
                    title={playlists?.name}
                    subtitle={playlists?.tracks?.total + " Songs"}
                    img={playlists?.images[0]?.url}
                    ></WidgetEntry>
                )
            }) : newRelease ? newRelease.map((album)=>{
                return(
                    <WidgetEntry
                    title={album?.name}
                    subtitle={album?.artists[0]?.name}
                    img={album?.images[2]?.url}
                    ></WidgetEntry>
                )
            }) : ''
        }
        <div></div>
    </div>
  )
}

export default WidgetCard
