import { useState } from 'react'

interface Props {
  checkAnswer: (answer: string | undefined) => void
  answers: string[]
  buttonColour: string
  questionPassed: boolean
}

export default function ElevatorAnswers({
  buttonColour,
  checkAnswer,
  answers,
  questionPassed,
}: Props) {
  const [selectedAnswer, setSelectedAnswer] = useState('')

  const handleAnswerClick = (answer: string) => {
    checkAnswer(answer)
    setSelectedAnswer(answer)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      {answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => handleAnswerClick(answer)}
          id={selectedAnswer === answer ? buttonColour : ''}
          className="blue-button blue-button-lge number"
        >
          {questionPassed ? index + 1 : answer}
        </button>
      ))}
    </div>
  )
}
