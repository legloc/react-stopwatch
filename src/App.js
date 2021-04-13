import { useState, useEffect } from 'react'
import Header from './components/Header'
import Display from './components/Display'
import { PauseButton, ResetButton, PlayButton, StopButton } from './components/Buttons'
import './App.sass'

const App = () => {
  const [seconds, setSeconds] = useState(0)
  const [isPaused, setPaused] = useState(true)

  useEffect(() => {
    if (!isPaused) {
      const intervalId = setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000)

      return () => clearInterval(intervalId)
    }
  }, [isPaused])

  return (
    <div className="wrapper">
      <Header />
      <Display seconds={ seconds } />   
      <div className="controls">
        <PauseButton onDoubleClick={ () => setPaused(true) } />  
        { isPaused ? <PlayButton onClick={ () => setPaused(false) } /> : <StopButton onClick={ () => { setPaused(true); setSeconds(0) }} /> }
        <ResetButton onClick={ () => setSeconds(0) } />
      </div>
    </div>
  )
}

export default App