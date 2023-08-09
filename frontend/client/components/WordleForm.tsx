import { FormEvent, useState, ChangeEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Wordle from './Wordle'
import Hintss from './GetAHint'
import incorrectBuzzerUrl from '/sounds/wrong-buzzer.mp3'
import correctBuzzerUrl from '/sounds/correct-buzzer.mp3'
import gameoverUrl from '/sounds/gameOver.mp3'
import useSound from 'use-sound'

// interface Props {
//   userId: string
// }

export function WordleForm() {
  const [input, setInput] = useState('')
  const [count, setCount] = useState(0)
  const [displayGame, setDisplayGame] = useState(false)
  const navigate = useNavigate()
  const passcode = 'proxy'
  const { userId } = useParams()
  const [playIncorrectBuzzer] = useSound(incorrectBuzzerUrl, { volume: 0.05 })
  const [playCorrectBuzzer] = useSound(correctBuzzerUrl, { volume: 0.2 })
  const [playGameover] = useSound(gameoverUrl, { volume: 0.1 })

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    if (input !== passcode) {
      setCount(count + 1)
      if (count >= 1) {
        playGameover()
        return navigate('/gameover')
      } else {
        playIncorrectBuzzer()
        return window.alert('Try again')
      }
    }
    playCorrectBuzzer()
    return navigate(`/game/${userId}/scene/4`)
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInput(evt.target.value)
  }

  return (
    <div className="grey-background" id="wordle-background">
      <div id="wordle-container">
        <div className="screen" id="wordle-screen">
          <div>
            <p>PASSCODE</p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              {/* <label htmlFor="my-input"></label> */}
              <div>
                <input
                  className="input-field"
                  id="wordle-input"
                  type="password"
                  placeholder="✱✱✱✱✱"
                  onChange={handleChange}
                ></input>
              </div>
              <button className="blue-button" id="enter-button">
                Enter
              </button>
            </form>
          </div>
          <p id="wordle-text">Attempts remaining: {2 - count}</p>
        </div>

        {displayGame ? (
          <div id="wordle-game">
            <div id="wordle-border">
              <Wordle />
            </div>
          </div>
        ) : (
          <>
            <img
              id="wordle-phone"
              src="/images/cellphone.png"
              alt="cellphone"
              onClick={() => setDisplayGame(!displayGame)}
            />
            <img id="wordle-postit" src="/images/postit.png" alt="postit" />
            <img id="wordle-note" src="/images/note.png" alt="note" />
          </>
        )}
      </div>
      <div>
        <Hintss level_id={4} />
      </div>
    </div>
  )
}

export default WordleForm

/* if phone clicked more than once worlde wont load again */
/* maybe wordle doesn't change back until its solved??? */
