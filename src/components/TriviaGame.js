import React, { useState } from "react"
import { Question } from "./Question"

export function TriviaGame() {
  const [questions, setQuestions] = useState([])
  const [gameRunning, setGameRunning] = useState(false)

  async function getTrivia() {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=10&encode=url3986"
    )
    const data = await res.json()
    setQuestions(data.results)
    setGameRunning(true)
    setPoints(0)
    setAnswers(0)
  }

  const [Points, setPoints] = useState(0)
  const [noAnswers, setAnswers] = useState(0)

  function addPoint() {
    setPoints((prevState) => prevState + 1)
  }

  function incAnswers() {
    setAnswers((prevState) => prevState + 1)
  }

  return (
    <div className="main-trivia">
      {gameRunning ? (
        <div className="questions">
          {questions.map((i, index) => (
            <Question
              key={index}
              questionObj={i}
              addPoint={addPoint}
              incAnswers={incAnswers}
            />
          ))}
          {noAnswers >= 10 && (
            <div className="result-reset">
              <h1>You got {Points}/10!</h1>
              <button onClick={() => getTrivia()} className="button-reset">
                Again?
              </button>
            </div>
          )}
        </div>
      ) : (
        <button onClick={() => getTrivia()} className="button-start">
          Start?
        </button>
      )}
    </div>
  )
}
