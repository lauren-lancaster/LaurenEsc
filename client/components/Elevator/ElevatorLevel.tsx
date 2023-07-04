import { useRef, useState, SetStateAction, Dispatch, useEffect } from 'react'
import { useSound } from 'use-sound'
import { ParallaxLayer } from '@react-spring/parallax'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import * as actions from '../../actions/questions'
import ElevatorQuestions from './ElevatorQuestions'

import liftBellUrl from '/sounds/bell.wav'

interface Props {
  setLevelNum: Dispatch<SetStateAction<number>>
  levelNum: number
  refProp: React.MutableRefObject<any>
}

export default function ElevatorLevel({ refProp, levelNum, setLevelNum }: Props) {
  const question = useAppSelector((state) => state.question) as Question[]
  const dispatch = useAppDispatch()
  const [playLiftBell] = useSound(liftBellUrl, { volume: 0.1 })

  const [questionPassed, setQuestionPassed] = useState(false)
  const hasQuestionPassed = (response: boolean) => {
    setQuestionPassed(response)
  }

  const liftBellFx = () => {
    playLiftBell()
  }

  const incrLevel = (level: number) => {
    setLevelNum((prevLevel) => prevLevel + level)
    liftBellFx()
    console.log(typeof level)
    refProp.current.scrollTo(level + 0.6)
    setQuestionPassed(false)
  }

  useEffect(() => {
    dispatch(actions.getQuestionsThunk())
  }, [dispatch])

  return (
    <>
      {question.map((qu, i) => (
        <ParallaxLayer key={`level-${i}`} offset={i + 0.6} speed={0.5}>
          <div>
            <ElevatorQuestions
              question={qu.question}
              correct={qu.correct}
              answer1={qu.answer1}
              answer2={qu.answer2}
              answer3={qu.answer3}
              answer4={qu.answer4}
              data={levelNum}
              questionPassed={questionPassed}
              setQuestionPassed={setQuestionPassed}
            />
            {questionPassed && (
              <button onClick={() => incrLevel(qu.id)} className="blue-button">
                Go Down
              </button>
            )}
          </div>
        </ParallaxLayer>
      ))}
    </>
  )
}
