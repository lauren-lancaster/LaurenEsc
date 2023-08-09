import { useState, SetStateAction, Dispatch, useEffect } from 'react'
import { useSound } from 'use-sound'
import { ParallaxLayer } from '@react-spring/parallax'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import * as actions from '../../actions/questions'
import ElevatorQuestions from './ElevatorQuestions'
import { Question } from '../../../models/questions'

import liftBellUrl from '/sounds/bell.wav'

interface Props {
  setLevelNum: Dispatch<SetStateAction<string>>
  levelNum: string
  refProp: React.MutableRefObject<any>
}

export default function ElevatorLevel({
  refProp,
  levelNum,
  setLevelNum,
}: Props) {
  const question = useAppSelector((state) => state.question) as Question[]
  const dispatch = useAppDispatch()
  const [playLiftBell] = useSound(liftBellUrl, { volume: 0.1 })

  const [questionPassed, setQuestionPassed] = useState(false)

  const liftBellFx = () => {
    playLiftBell()
  }

  const levelArr = ['2', '1', 'G', 'B', '∞']

  const incrLevel = (level: number, answer: string) => {
    setLevelNum(levelArr[-1 + level])
    liftBellFx()
    if (answer == 'Jupiter') {
      refProp.current.scrollTo(level + 1.2)
      console.log('question4')
    } else {
      refProp.current.scrollTo(level + 0.2)
    }
    setQuestionPassed(false)
  }

  useEffect(() => {
    dispatch(actions.getQuestionsThunk())
  }, [dispatch])

  return (
    <>
      {question.map((qu, i) => (
        <ParallaxLayer
          key={`level-${i}`}
          offset={i + 0.3}
          speed={0.5}
          style={{ zIndex: '300' }}
        >
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
              <button
                onClick={() => incrLevel(qu.id, qu.correct)}
                className="blue-button"
              >
                Go Down
              </button>
            )}
          </div>
        </ParallaxLayer>
      ))}
    </>
  )
}
