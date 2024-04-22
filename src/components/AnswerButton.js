export function AnswerButton({
  answer,
  disabled,
  checkAnswer,
  checked,
  correct,
}) {
  return (
    <button
      className={`answer-button ${checked && "checked"} ${correct && "correct"}`}
      onClick={() => checkAnswer(answer)}
      disabled={disabled}
    >
      {decodeURIComponent(answer)}
    </button>
  )
}
