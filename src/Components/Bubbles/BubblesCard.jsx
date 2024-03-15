import PropTypes from 'prop-types'
const BubblesCard = ({content, size=20, height=20}) => {
  return (
    <div className={`bg-white w-[${size}vw] max-h-[${height}] p-[20px] flex items-center justify-center rounded-xl phone:w-[95%] tablet:`}>{content}</div>
  )
}

export default BubblesCard
BubblesCard.propTypes = {
  content: PropTypes.object,
  size: PropTypes.number,
  height:PropTypes.number,
}