import { useEffect } from "react"

const reloadGame = () => {
  console.log("fotograma")
}

const loadGame = () => {
  const canvas = document.getElementById("canvas-game") as HTMLCanvasElement
  if (canvas !== null) {
    const fps = 30
    // const context = canvas.getContext("2D")
    const canvasW = 944
    const canvasH = 464
    // const rows = 10
    // const cols = 10
    // const cellW = Math.floor(canvasW / rows)
    // const cellH = Math.floor(canvasH / cols)
    // const aliveColor = "#FFFFFF"
    // const deadColor = "#000000"
    canvas.width = canvasW
    canvas.height = canvasH
    setInterval(() => reloadGame(), 1000 / fps)
  }
}

const Game = () => {
  useEffect(() => {
    loadGame()
  }, [])

  return (
    <main>
      <section className="container">
        <div className="canvas-wrapper">
          <canvas id="canvas-game"></canvas>
        </div>
      </section>
    </main>
  )
}

export default Game
