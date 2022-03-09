import React, { useEffect, useState } from "react"
import MusicList from "./MusicList"
import { SearchResult, Track } from "./SearchResult"

function Home() {
  const [tracks, setTracks] = useState<Track[]>([])
  const getMusic = async (search: string) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`
      )
      if (response.ok) {
        let result: SearchResult = await response.json()
        setTracks(result.data)
        console.log(result)
      }
    } catch (error) {}
  }

  useEffect(() => {
    getMusic("taylor")
  }, [])

  return (
    <div>
      <MusicList tracks={tracks}></MusicList>
    </div>
  )
}

export default Home
