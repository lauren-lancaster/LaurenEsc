import BalonyStatsScreen from './BalconyStatsScreen'
import bus from '/images/bus.png'

export default function BalconyGame() {
  return (
    <>
      <div>
        <BalonyStatsScreen />
      </div>
      <div className="balony-game-board">
        <div className="vape"> </div>
        <div className="pipes"> </div>
        <img src={bus} alt="yellow bus" id="bus" />
      </div>
    </>
  )
}
