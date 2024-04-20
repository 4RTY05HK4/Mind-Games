import { useEffect, useState } from "react"

export function Question(props){
    const {question, correct_answer, incorrect_answers, type} = props.questionObj

    const [answers, setAnswers] = useState([correct_answer, ...incorrect_answers])
    const [disableButton, setDisableButton] = useState(false)

    useEffect(() => {
        setAnswers(prevState => prevState.map(x => decodeURI(x)))
        setAnswers(prevState => prevState.sort((a, b) => a.length - b.length))
    }, [])

    function checkAnswer(answer, event){
        if(answer === decodeURI(correct_answer)){
            setDisableButton(true)
            event.target.className = "answer-button correct"
            //props.addPoint()
            //props.incAnswers()
        }
        else{
            setDisableButton(true)
            event.target.className = "answer-button wrong"
            //props.incAnswers()
        }
    }

    return(
        <div>
            <h3>{decodeURIComponent(question)}</h3>
            {
            type === "multiple" ?
                <div>
                    <button 
                        className="answer-button"
                        onClick={(event) => checkAnswer(answers[0], event)}
                        disabled={disableButton}
                    >
                        {decodeURIComponent(answers[0])}
                    </button>
                    <button 
                        className="answer-button"
                        onClick={(event) => checkAnswer(answers[2], event)}
                        disabled={disableButton}
                    >
                        {decodeURIComponent(answers[2])}
                    </button>
                    <button 
                        className="answer-button"
                        onClick={(event) => checkAnswer(answers[1], event)}
                        disabled={disableButton}
                    >
                        {decodeURIComponent(answers[1])}
                    </button>
                    <button 
                        className="answer-button"
                        onClick={(event) => checkAnswer(answers[3], event)}
                        disabled={disableButton}
                    >
                        {decodeURIComponent(answers[3])}
                    </button>
                </div>
            :
                <div>
                    <button 
                        className="answer-button"
                        onClick={(event) => checkAnswer(answers[1], event)}
                        disabled={disableButton}
                    >
                        {decodeURIComponent(answers[1])}
                    </button>
                    <button 
                        className="answer-button"
                        onClick={(event) => checkAnswer(answers[0], event)}
                        disabled={disableButton}
                    >
                        {decodeURIComponent(answers[0])}
                    </button>
                </div>
            }
        </div>
    )
}