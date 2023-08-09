const tetris = new Audio('/sounds/tetris.mp3')
tetris.play()

const bus = document.getElementById('bus') //get item by class bus
const gameNav = document.getElementById('game-stats') //get item by class bus

const vape = document.querySelector('.vape')
const exitLink = document.getElementById('balcony-exit')
let busLeft = parseInt(window.getComputedStyle(bus).getPropertyValue('left')) //get bus left property
let busBottom = parseInt(
  window.getComputedStyle(bus).getPropertyValue('bottom')
) // get bus right property
let missed = 10
let vapeCount = 0

function updatedMissed(missed) {
  const missedScore = document.getElementById('missed-score')
  missedScore.innerHTML = `${missed}`
}
function updateVapeCount(vapeCount) {
  const missedScore = document.getElementById('vape-count')
  missedScore.innerHTML = `${vapeCount}/10`
}

updatedMissed(10)
updateVapeCount(0)

function moveBusRight() {
  busLeft += 20
  bus.style.left = busLeft + 'px'
} // move bus left and limit to screen edge

function moveBusLeft() {
  busLeft -= 20
  bus.style.left = busLeft + 'px'
} //move bus right and limit to screen edge

function control(e) {
  if (e.key == 'ArrowLeft') moveBusLeft()
  if (e.key == 'ArrowRight') moveBusRight()
} //control bus with keys

function createVapes() {
  let vapeBottom = 600
  let vapeLeft = Math.floor(Math.random() * 1000)
  let vapes = document.createElement('img')
  vapes.setAttribute('id', 'vape')
  vapes.setAttribute('src', '/images/vape-purple.png')
  vape.appendChild(vapes)

  const i = setInterval(vapeFall, 20)
  setTimeout(createVapes, 2000)

  function vapeFall() {
    if (
      vapeBottom < busBottom + 100 &&
      vapeBottom > busBottom &&
      vapeLeft > busLeft - 50 &&
      vapeLeft < busLeft + 150
    ) {
      vape.removeChild(vapes)
      clearInterval(i)
      vapeCount++
      updateVapeCount(vapeCount)
      checkWin()
    }
    if (vapeBottom === busBottom) {
      vape.removeChild(vapes)
      missed--
      updatedMissed(missed)
      checkLose()
    }
    vapeBottom -= 5
    vapes.style.bottom = vapeBottom + 'px'
    vapes.style.left = vapeLeft + 'px'
  }
}

function checkWin() {
  if (vapeCount == 10) {
    let exitButton = document.createElement('button')
    exitButton.setAttribute('id', 'red-screen')
    exitButton.innerHTML = 'ESCAPE'
    exitButton.style.position = 'fixed'
    exitButton.style.bottom = 0
    exitButton.style.right = '10px'
    exitLink.appendChild(exitButton)
    tetris.pause()
  }
}

function checkLose() {
  if (missed == 3) {
    gameNav.setAttribute('class', 'screen red-screen')
  }
  if (missed == 0) {
    window.location.href = '/gameover'
  }
}

createVapes()

document.addEventListener('keydown', control) //keydown event listener
