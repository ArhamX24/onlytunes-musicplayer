import React from 'react'
import "../Styles/queue.css"

const Queue = ({tracks, setCurrentIdx, setIsPlaying}) => {

  // console.log(tracks, "tracks from queue");

  const timeConverter = (ms) => {
    let min = Math.floor(ms/60000);
    let sec = ((ms % 60000) / 1000).toFixed(0);
    return min + ":" + sec 
  }

  const handleClick = (idx) => {
    setCurrentIdx(idx)
    setIsPlaying(true)
  }
  

  return (
    <div className='queue-container flex'>
      <div className="queue">
        <p className='up-next'>Up Next </p>
        <div className="queue-list">
            {
                tracks?.map((track, idx)=>{
                    return(
                        <div key={track?.track?.id} className='queue-item' onClick={()=> {handleClick(idx)}}>
                            <p>{idx + 1 }</p>
                            <p className='track-name'>{track?.track?.name}</p>
                            <p className='track-duration'>0:30</p>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Queue
