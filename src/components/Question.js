import { useEffect, useState } from "react"
import { AnswerButton } from "./AnswerButton"

export function Question(props) {
  const { question, correct_answer, incorrect_answers } = props.questionObj

  const [answers, setAnswers] = useState([])

  useEffect(() => {
    setAnswers([correct_answer, ...incorrect_answers])
  },[correct_answer, incorrect_answers])

  useEffect(() => {
    setAnswers((prevState) => prevState.map((x) => decodeURI(x)))
    setAnswers((prevState) => prevState.sort((a, b) => a.length - b.length))
    setAnswers((prevState) =>
      prevState.map((elem) => ({
        answer: elem,
        disabled: false,
        checked: false,
        correct: false,
      }))
    )
  }, [question])

  function checkAnswer(answer) {
    setAnswers((prevState) =>
      prevState.map((ans) => {
        return {
          ...ans,
          disabled: true,
        }
      })
    )

    setAnswers((prevState) =>
      prevState.map((ans) => {
        return ans.answer === answer
          ? {
              ...ans,
              checked: true,
            }
          : ans
      })
    )

    setAnswers((prevState) =>
      prevState.map((ans) => {
        return ans.answer === decodeURI(correct_answer)
          ? {
              ...ans,
              correct: true,
            }
          : ans
      })
    )

    if (answer === decodeURI(correct_answer)) {
      props.addPoint()
      props.incAnswers()
    } else {
      props.incAnswers()
    }
  }

  return (
    <div className="question">
      <h3>{decodeURIComponent(question)}</h3>
      {answers.map((elem, index) => (
        <AnswerButton
          key={index}
          id={index}
          answer={elem.answer}
          checkAnswer={() => checkAnswer(elem.answer)}
          disabled={elem.disabled}
          checked={elem.checked}
          correct={elem.correct}
        />
      ))}
    </div>
  )
}
