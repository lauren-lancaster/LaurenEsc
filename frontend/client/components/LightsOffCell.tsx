import clickUrl from '/sounds/lights-off.wav'
import { useSound } from 'use-sound'

interface Props {
  cellIndex: string
  isOn: boolean
  toggleLight: any
}

export default function Cell(props: Props) {
  const { cellIndex, isOn, toggleLight } = props
  const [playClick] = useSound(clickUrl, { volume: 0.5 })

  function handleToggleLight() {
    toggleLight(cellIndex)
    playClick()
  }

  return (
    <button
      className={isOn ? 'Cell-on' : 'Cell-off'}
      onClick={handleToggleLight}
    ></button>
  )
}
