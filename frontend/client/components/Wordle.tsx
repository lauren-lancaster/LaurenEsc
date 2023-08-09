import { useEffect } from 'react'

export function Wordle() {
  //Run JS on this comp
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/scripts/wordle.js'
    console.log(script.src, 'script.src')
    script.async = false
    document.body.appendChild(script)
    console.log(script, 'script appendchild')

    //Attaching CSS to this comp
    const link = document.createElement('link')
    link.href = '/styles/wordle.css'
    link.rel = 'stylesheet'
    link.type = 'text/css'
    document.head.appendChild(link)

    const link2 = document.createElement('link')
    link2.href =
      'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
    link2.rel = 'stylesheet'
    link2.type = 'text/css'
    document.head.appendChild(link2)

    //clean component when finished being used.
    return () => {
      document.body.removeChild(script)
      document.head.removeChild(link2)
      document.head.removeChild(link)
    }
  }, [])

  return (
    <>
      {/* <div id="container"> */}
      <div id="game">
        <div className="board-container">
          <div id="board"></div>

          <div id="keyboard-container">
            <div className="keyboard-row">
              <button data-key="q">q</button>
              <button data-key="w">w</button>
              <button data-key="e">e</button>
              <button data-key="r">r</button>
              <button data-key="t">t</button>
              <button data-key="y">y</button>
              <button data-key="u">u</button>
              <button data-key="i">i</button>
              <button data-key="o">o</button>
              <button data-key="p">p</button>
            </div>
            <div className="keyboard-row">
              <div className="spacer-half"></div>
              <button data-key="a">a</button>
              <button data-key="s">s</button>
              <button data-key="d">d</button>
              <button data-key="f">f</button>
              <button data-key="g">g</button>
              <button data-key="h">h</button>
              <button data-key="j">j</button>
              <button data-key="k">k</button>
              <button data-key="l">l</button>
            </div>
            <div className="keyboard-row">
              <button data-key="enter" className="wide-button">
                Enter
              </button>
              <button data-key="z">z</button>
              <button data-key="x">x</button>
              <button data-key="c">c</button>
              <button data-key="v">v</button>
              <button data-key="b">b</button>
              <button data-key="n">n</button>
              <button data-key="m">m</button>
              <button data-key="del" className="wide-button">
                Del
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wordle
