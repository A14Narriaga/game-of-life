import { useEffect } from "react"

const rows = 70
const cols = 70
let board: Array<Array<Cell>>

class Cell {
  x: number
  y: number
  state: number
  nextState: number
  neighbors: Array<Cell>
  constructor(x: number, y: number, state: number) {
    this.x = x
    this.y = y
    this.state = state
    this.nextState = state
    this.neighbors = new Array<Cell>(8)
  }
  getNeighbors = () => {
    const moveAxis = [-1, 0, 1]
    for (const dx of moveAxis) {
      for (const dy of moveAxis) {
        if (dx === 0 && dy === 0) continue
        const neighborX = (this.x + dx + rows) % rows
        const neighborY = (this.y + dy + cols) % cols
        this.neighbors.push(board[neighborX]?.[neighborY])
      }
    }
  }
  paint = () => {}
}

const cleanBoard = () => {}

const paintBoard = () => {
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) board[x][y].paint()
  }
}

const reloadBoard = () => {
  cleanBoard()
  paintBoard()
  console.log("fotograma")
}

const loadBoard = () => {
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      const state = Math.floor(Math.random() * 2)
      board[x][y] = new Cell(x, y, state)
    }
  }
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) board[x][y].getNeighbors()
  }
  console.log(board)
}

const loadGame = ({ fps }: { fps: number }) => {
  board = Array.from(new Array(rows)).map(row => new Array(cols)) as Array<Array<Cell>>
  loadBoard()
  setInterval(() => reloadBoard(), 1000 / fps)
}

const Game = () => {
  useEffect(() => {
    loadGame({ fps: 30 })
  }, [])

  const prueba = []
  for (let i = 0; i < 54 * 26; i++) {
    i % 2 === 0
      ? prueba.push(<div className="alive"></div>)
      : prueba.push(<div className="dead"></div>)
  }

  return (
    <main>
      <section className="container">
        <div className="game-wrapper">
          <div className="game">{prueba}</div>
        </div>
      </section>
    </main>
  )
}

export default Game
