import React from "react"
import { Card } from "react-bootstrap"
import { Track } from "./SearchResult"

interface TrackProps {
  track: Track
}

function TrackCard({ track }: TrackProps) {
  return (
    <div>
      <Card className="mt-4" onClick={() => {}}>
        <Card.Img variant="top" src={track.album.cover_big} />
        <Card.Body>
          <Card.Title>{track.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {track.artist.name}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TrackCard
