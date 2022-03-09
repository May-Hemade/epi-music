import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MusicList from "./MusicList"
import { SearchResult, Track } from "./SearchResult"
type HomeParams = {
  search?: string
}
function Home() {
  const params = useParams<HomeParams>()
  const [tracks, setTracks] = useState<Track[]>([])
  const getMusic = async (search?: string) => {
    try {
      const searchQuery = search ? search : "taylor"
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`
      )
      if (response.ok) {
        let result: SearchResult = await response.json()
        setTracks(result.data)
        console.log(result)
      }
    } catch (error) {}
  }

  useEffect(() => {
    getMusic(params?.search)
  }, [])

  return (
    <div>
      <MusicList tracks={tracks}></MusicList>
    </div>
  )
}

export default Home
