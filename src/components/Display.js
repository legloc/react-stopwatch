import moment from 'moment'

const Display = ({ seconds }) => {
  const formated = moment.utc(seconds*1000).format("HH:mm:ss")

  return (
    <span>
      { formated }
    </span>
  )
}

export default Display