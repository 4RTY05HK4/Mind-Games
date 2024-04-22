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
                    {
                        questions.map((i, index) => 
                            <Question 
                            key={index} 
                            questionObj={i}
                            addPoint={addPoint}
                            incAnswers={incAnswers}
                            />
                        )
                    }
                    {
                        noAnswers >= 10 && <div>
                            <h1>You got {Points}/10!</h1>
                        </div>
                    }
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