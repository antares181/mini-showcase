import './App.css';
import image from './frame-app.png'
import { motion } from 'framer-motion'
import AnimationOne from './components/animation-1';
import sketchupPreview from './components/sketchup';
import VideoPreview from './components/video';

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

function App() {

  return <VideoPreview />
  // return <AnimationOne />

  // return <sketchupPreview/>

}

export default App;
