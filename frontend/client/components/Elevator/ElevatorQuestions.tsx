import { SetStateAction, Dispatch, useState } from 'react'
import useSound from 'use-sound'
import incorrectBuzzerUrl from '/sounds/wrong-buzzer.mp3'
import correctBuzzerUrl from '/sounds/correct-buzzer.mp3'
import ElevatorAnswers from './ElevatorAnswers'

interface Props {
  questionPassed: boolean
  setQuestionPassed: Dispatch<SetStateAction<boolean>>
  data: number
  question: string
  answer1: string
  answer2: string
  answer3: string
  answer4: string
  correct: string
}

function ElevatorQuestions(props: Props) {
  const [buttonColour, setButtonColour] = useState('')
  const [playIncorrectBuzzer] = useSound(incorrectBuzzerUrl, { volume: 0.05 })
  const [playCorrectBuzzer] = useSound(correctBuzzerUrl, { volume: 0.2 })

  const checkAnswer = (answer: string | undefined) => {
    if (answer === props.correct) {
      playCorrectBuzzer()
      setButtonColour('green-btn')
      props.setQuestionPassed(true)
    } else {
      playIncorrectBuzzer()
      setButtonColour('red-btn')
      props.setQuestionPassed(false)
    }
  }

  return (
    <div className="screen screen-sml">
      <h2>{props.question}</h2>
      <ElevatorAnswers
        questionPassed={props.questionPassed}
        buttonColour={buttonColour}
        checkAnswer={checkAnswer}
        answers={[props.answer1, props.answer2, props.answer3, props.answer4]}
      />
    </div>
  )
}

export default ElevatorQuestions
