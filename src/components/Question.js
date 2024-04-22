import { useEffect, useState } from "react"
import { AnswerButton } from "./AnswerButton"

export function Question(props){
    const {question, correct_answer, incorrect_answers} = props.questionObj

    const [answers, setAnswers] = useState([correct_answer, ...incorrect_answers])

    useEffect(() => {
        setAnswers(prevState => prevState.map(x => decodeURI(x)))
        setAnswers(prevState => prevState.sort((a, b) => a.length - b.length))
        setAnswers(prevState => prevState.map(x => ({
            answer:x,
            disabled:false,
            checked:false,
            correct:false})))
        }, [question])

    function checkAnswer(answer){
        if(answer === decodeURI(correct_answer)){
            setAnswers(prevState => {
                return prevState.map((ans) => {
                    return ans.answer === answer ?
                    {
                        ...ans,
                        disabled:true,
                        checked:true,
                        correct:true
                    } 
                    :{
                        ...ans,
                        disabled:true,
                    }
                })
            })
            props.addPoint()
            props.incAnswers()
        }
        else{
            setAnswers(prevState => prevState.map((ans) => {
                if(ans.answer === answer)
                {
                    return{
                        ...ans,
                        disabled:true,
                        checked:true,
                        correct:false
                    }
                } 
                else if(ans.answer === decodeURI(correct_answer)){
                    return{
                        ...ans,
                        disabled:true,
                        checked:false,
                        correct:true
                    }
                }
                else{
                    return{
                        ...ans,
                        disabled:true,
                    }
                }
            }))
            props.incAnswers()
        }
    }
    
    return(
        <div>
            <h3>{decodeURIComponent(question)}</h3>
            {
                answers.map((elem, index) =>
                    <AnswerButton 
                        key={index}
                        id={index}
                        answer={elem.answer}
                        checkAnswer={() => checkAnswer(elem.answer)}
                        disabled={elem.disabled}
                        checked={elem.checked} 
                        correct={elem.correct}
                    />
                )
            }
        </div>
    )
}