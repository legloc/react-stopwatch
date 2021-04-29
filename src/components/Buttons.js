const PauseButton = ({ onClick }) => (
  <button className="control btn-wait" onClick={ onClick }>
    Wait
  </button>
)

const ResetButton = ({ onClick }) => (
  <button className="control btn-reset" onClick={ onClick }>
    Reset
  </button>
)

const PlayButton = ({ onClick }) => (
  <button className="control btn-play-stop btn-play" onClick={ onClick }>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#efefef" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
  </button>
)

const StopButton = ({ onClick }) => (
  <button className="control btn-play-stop btn-stop" onClick={ onClick }>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#efefef" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
  </button>
)

export { PauseButton, ResetButton, PlayButton, StopButton }