import './App.sass'

const App = () => {
  return (
    <div className="wrapper">
      
      <span className="time">00:00:00</span>

      <div className="controls">
        <button className="control btn-wait">
          <ion-icon name="pause" />
        </button>
        <button className="control btn-play">
          <ion-icon name="play" />
        </button>
        <button className="control btn-reset">
          <ion-icon name="refresh" />
        </button>
      </div>

    </div>
  )
}

export default App