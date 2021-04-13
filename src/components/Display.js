import moment from 'moment'

const Display = ({ seconds }) => (
  <span className="display">
    { moment.utc(seconds * 1000).format("HH:mm:ss") }
  </span>
)

export default Display