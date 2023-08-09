import Cell from './LightsOffCell'
import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import gameoverUrl from '/sounds/gameOver.mp3'
import { useSound } from 'use-sound'

function Board() {
  const [colourScreen, setColourScreen] = useState('yellow-screen')
  const [colourText, setColourText] = useState('')
  const [colourBox, setBoxColour] = useState('')

  const size = 3
  const chanceLightStartsOn = 0.25
  const [count, setCount] = useState(0)
  const { userId, id } = useParams()
  const navigate = useNavigate()
  const [playGameover] = useSound(gameoverUrl, { volume: 0.1 })

  const lightsGrid = Array(size)
    .fill(0)
    .map(() =>
      Array(size)
        .fill(0)
        .map(() => randomLight())
    )
  lightsGrid[1][1] = true

  function randomLight() {
    return Math.random() < chanceLightStartsOn
  }

  const [board, setBoard] = useState({ grid: lightsGrid })

  function toggleAllLights(cellIndex: string) {
    const [cellRowIndex, cellColIndex] = cellIndex.split('')
    const numCellRowIndex = Number(cellRowIndex)
    const numCellColIndex = Number(cellColIndex)

    toggleLight(cellIndex)
    toggleLight([numCellRowIndex, numCellColIndex + 1].join(''))
    toggleLight([numCellRowIndex, numCellColIndex - 1].join(''))
    toggleLight([numCellRowIndex + 1, numCellColIndex].join(''))
    toggleLight([numCellRowIndex - 1, numCellColIndex].join(''))
  }

  function toggleLight(cellIndex: string) {
    const stringCellIndex = String(cellIndex)
    const [cellRowIndex, cellColIndex] = stringCellIndex.split('')
    const numCellRowIndex = Number(cellRowIndex)
    const numCellColIndex = Number(cellColIndex)

    setBoard((state) => ({
      ...state,
      grid: state.grid.map((row, rowIndex) =>
        rowIndex === numCellRowIndex
          ? row.map((col, colIndex) =>
              colIndex === numCellColIndex ? !col : col
            )
          : row
      ),
    }))
    incCounter()
  }

  function hasWon() {
    return board.grid.every((row) => row.every((cell) => !cell))
  }

  const incCounter = () => {
    setCount(count + 1)
    if (count > 18) {
      setColourScreen('red-screen')
      setColourText('red-text')
      setBoxColour('red-box')
    }
  }

  const gridDisplay = board.grid.map(function (row, rowIndex) {
    if (count === 25) {
      playGameover()
      navigate('/gameover')
    } else {
      return (
        <div className="Board-row" key={rowIndex}>
          {row.map((col, colIndex) => (
            <Cell
              key={[rowIndex, colIndex].join('')}
              cellIndex={[rowIndex, colIndex].join('')}
              isOn={board.grid[rowIndex][colIndex]}
              toggleLight={toggleAllLights}
            />
          ))}
        </div>
      )
    }
  })

  return (
    <>
      <div className="screen red-blinking" id={colourScreen}>
        <p className="lightoff-header" id={colourText}>
          Turn Off the Lights
        </p>
        <div className="lightoff-attempts" id={colourBox}>
          <p className="number" id={colourText}>
            Attempts left: {25 - count}{' '}
          </p>
        </div>
      </div>
      <div className="board">
        {hasWon() ? (
          <div className="board-haswon">
            <Link to={`/game/${userId}/scene/${id}/level/2`}>
              <button className="blue-button">Escape</button>
            </Link>
          </div>
        ) : (
          gridDisplay
        )}
      </div>
    </>
  )
}

export default Board

/* HINT */
/* Starting with the second row, click on every cell that has a light on in the row above it. This will turn off all the lights in that row. Continue with each successive row until the only remaining lights are in the final row. */
/* In the top row, select the inverse of the bottom row of cells with lights on.
/* FOR EXAMPLE */
/* Bottom row: -*- Top row: *-*, Bottom row: *-- Top row: --* */
/* Repeat */
