import * as React from 'react'
import image from '../frame-app.png'
import { motion } from 'framer-motion'

const styles = {
  container: {
    height: '100vh',
    width: '100%',
    overflowY: 'none',
    backgroundColor: '#F2F3F4',
    position: 'fixed',
    top: 0,
    left: 0
  },
}

function AnimationOne() {
  return (
    <div style={styles.container}>
      <motion.div
        animate={{
          translateY: [200, -3800],
          translateX: [1240, -990],
        }}
        transition={{ duration: 60, delay: 1, ease: 'linear' }}
        style={styles.image}
      >
        <img style={{ transform: 'rotate(-30deg) scale(1.3)' }} src={image} width="100%" />
      </motion.div>
    </div>
  )
}

export default AnimationOne