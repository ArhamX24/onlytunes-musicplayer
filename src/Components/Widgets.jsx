import React, { useState, useEffect } from 'react'
import "../Styles/widgets.css"
import apiClient from '../spotify'
import WidgetCard from './WidgetCard'

const Widgets = ({artistId}) => {
  const [Similar, setSimilar] = useState([])
  const [Featured, setFeatured] = useState([])
  const [NewReleases, setNewReleases] = useState([])

  const id = artistId?.artists[0]?.id
  // console.log(id, "artists id");
  
  const getArtist = async () => {
    let response = await apiClient.get(`/artists/${id}/related-artists`)

    const data = response.data?.artists.slice(0,3);
    setSimilar(data)
  }

  const getFeatured = async () => {
    let response = await apiClient.get(`/browse/featured-playlists`)

    const data = response.data?.playlists?.items?.slice(0,3);
    setFeatured(data)
  }

  const getNewRelease = async () => {
    let response = await apiClient.get(`/browse/new-releases`)

    const data = response.data?.albums?.items?.slice(0,3);
    setNewReleases(data)
  }

  console.log(Similar,  Featured, NewReleases, "Widgets data");

  

  useEffect(() => {
    getArtist()
    getFeatured()
    getNewRelease()
  }, [id])
  

 
  return (
    <div className='widget-body'>
      <WidgetCard title={"Similar Artists"} similar={Similar}></WidgetCard>
      <WidgetCard title={"Made For You"} featured={Featured}></WidgetCard>
      <WidgetCard title={"New Releases"} newRelease={NewReleases} ></WidgetCard>
    </div>
  )
}

export default Widgets
