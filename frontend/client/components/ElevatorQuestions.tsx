import { SetStateAction, useEffect, Dispatch } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import * as actions from '../actions/questions'
import { Question } from '../../models/questions'
import useSound from 'use-sound'
import incorrectBuzzerUrl from '/sounds/wrong-buzzer.mp3'
import correctBuzzerUrl from '/sounds/correct-buzzer.mp3'

interface Props {
  questionPassed: boolean
  setQuestionPassed: Dispatch<SetStateAction<boolean>>
  data: number
}

function ElevatorQuestions(props: Props) {
  const dispatch = useAppDispatch()
  const levelId = props.data

  const [playIncorrectBuzzer] = useSound(incorrectBuzzerUrl, { volume: 0.05 })
  const [playCorrectBuzzer] = useSound(correctBuzzerUrl, { volume: 0.2 })

  useEffect(() => {
    dispatch(actions.getSingleQuestionThunk(levelId))
  }, [dispatch, levelId])

  const question = useAppSelector((state) => state.question[0]) as Question

  const checkAnswer = (answer: string | undefined) => {
    if (answer === question.correct) {
      playCorrectBuzzer()
      props.setQuestionPassed(true)
    } else {
      playIncorrectBuzzer()
      props.setQuestionPassed(false)
    }
  }

  return (
    <div className="screen screen-sml" style={{ animation: 'none' }}>
      <h2>{question?.question}</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        <button
          onClick={() => checkAnswer(question?.answer1)}
          className="blue-button blue-button-lge"
        >
          {question?.answer1}
        </button>
        <button
          onClick={() => checkAnswer(question?.answer2)}
          className="blue-button blue-button-lge"
        >
          {question?.answer2}
        </button>
        <button
          onClick={() => checkAnswer(question?.answer3)}
          className="blue-button blue-button-lge"
        >
          {question?.answer3}
        </button>
        <button
          onClick={() => checkAnswer(question?.answer4)}
          className="blue-button blue-button-lge"
        >
          {question?.answer4}
        </button>
      </div>
    </div>
  )
}

export default ElevatorQuestions
