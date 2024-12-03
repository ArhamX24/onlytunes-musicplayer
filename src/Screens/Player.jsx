import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import apiClient from '../spotify';
import SongCard from '../Components/SongCard';
import Queue from '../Components/Queue';
import "../Styles/player.css"
import AudioPlayer from '../Components/AudioPlayer';
import Widgets from '../Components/Widgets';

const Player = () => {
  let {id} = useParams();
  const [Tracks, setTracks] = useState([])
  const [CurrentTrack, setCurrentTrack] = useState({})
  const [CurrentIdx, setCurrentIdx] = useState(0)
  const [IsPlaying, setIsPlaying] = useState(false);

  // console.log(id);

  const getData = async () => {
    let response = await apiClient.get(`/playlists/${id}/tracks`)
    setTracks(response.data.items)
    setCurrentTrack(response.data.items[0].track)
  }
  // console.log(Tracks)
  // console.log(CurrentTrack, "current track");
  
  
  useEffect(() => {
    setCurrentTrack(Tracks[CurrentIdx]?.track)
  }, [CurrentIdx, Tracks])
  
  
  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div className='screen-container flex'>
      <div className="left-player-body">
        <AudioPlayer currentTrack={CurrentTrack} currentIdx={CurrentIdx} setCurrentIdx={setCurrentIdx} total={Tracks} setIsPlaying={setIsPlaying} IsPlaying={IsPlaying}></AudioPlayer>
        <Widgets artistId={CurrentTrack?.album}></Widgets>
      </div>
      <div className="right-player-body">
        <SongCard  album={CurrentTrack?.album} key={CurrentTrack?.id}></SongCard>
        <Queue tracks={Tracks} setCurrentIdx={setCurrentIdx} setIsPlaying={setIsPlaying}></Queue>
      </div>
    </div>
  )
}

export default Player
