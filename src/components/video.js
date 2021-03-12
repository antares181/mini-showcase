import React from 'react'
import video from '../assets/output-sample-preview.webm'

const styles = {
  container: {
    padding: 0,
    margin: 0,
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100%'
  },
  video: {
    width: '100%'
  }
}

function VideoPreview() {
  return (
    <div style={styles.container}>
      <video src={video} autoPlay loop muted style={styles.video}>
        <source src={video} type="video/webm" />
      </video>
    </div>
  )
}

export default VideoPreview;