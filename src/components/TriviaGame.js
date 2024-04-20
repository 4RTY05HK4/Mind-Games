import React, {useState} from "react"
import { Question } from "./Question"

export function TriviaGame(){
    
    const [questions, setQuestions] = useState([])
    const [gameRunning, setGameRunning] = useState(false)
    
    async function getTrivia(){
        const res = await fetch('https://opentdb.com/api.php?amount=10&encode=url3986')
        const data = await res.json()
        setQuestions(data.results)
        setGameRunning(true)
    }

    function RenderQuestions(){
        let temp = []
        for(let i = 0; i < questions.length; i++){
            temp = [
                ...temp, 
                <Question 
                    key={i} 
                    questionObj={questions[i]}
                    addPoint={addPoint}
                    incAnswers={incAnswers}
                />
            ]
        }
        return temp
    }

    const [Points, setPoints] = useState(0)
    const [noAnswers, setNoAnswers] = useState(0)
    
    function addPoint(){
        setPoints(prevState => prevState + 1)
    }

    function incAnswers(){
        setNoAnswers(prevState => prevState + 1)
    }

    return (
        <div className="main-trivia">
            {
                gameRunning ?
                <div>
                    {noAnswers === 10 && <h1>{Points}/10</h1>}
                    <RenderQuestions />
                </div>
                :
                <button 
                    onClick={() => getTrivia()}
                    className="button-start">
                    Start?
                </button>
            }
        </div>
    )
}