import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Track } from "./SearchResult"
import TrackCard from "./TrackCard"

interface MusicListProps {
  tracks: Track[]
}
function MusicList({ tracks }: MusicListProps) {
  return (
    <div>
      <Container>
        <Row>
          {tracks.map((track) => (
            <Col md={4} key={track.id}>
              <TrackCard track={track}></TrackCard>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default MusicList
