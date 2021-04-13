const PauseButton = ({ onDoubleClick }) => {
  let clicks = 0
  const handleDoubleClick = (doubleClickAction) => {
    clicks++
    if (clicks === 1)
      setTimeout(() => {
        if (clicks !== 1)
          doubleClickAction()
        clicks = 0
      }, 300)
  }

  return (
    <button className="control btn-wait" onClick={ () => handleDoubleClick(onDoubleClick) }>
      <ion-icon name="pause" />
    </button>
  )
}

const ResetButton = ({ onClick }) => (
  <button className="control btn-reset" onClick={ onClick }>
    <ion-icon name="refresh" />
  </button>
)

const PlayButton = ({ onClick }) => (
  <button className="control btn-play-stop btn-play" onClick={ onClick }>
    <ion-icon name="play" />
  </button>
)

const StopButton = ({ onClick }) => (
  <button className="control btn-play-stop btn-stop" onClick={ onClick }>
    <ion-icon name="stop" />
  </button>
)

export { PauseButton, ResetButton, PlayButton, StopButton }