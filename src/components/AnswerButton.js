export function AnswerButton({answer, disabled, checkAnswer, checked, correct}){
    
    function setStyle(){
        if(checked && correct) return "checked correct"
        else if(checked && !correct) return "checked wrong"
        else if(!checked && correct) return "correct"
        else return "wrong"
    }
    
    const styleClass = setStyle()

    return(
        <button 
            className={`answer-button ${(checked || correct) &&styleClass}`}
            onClick={() => checkAnswer(answer)}
            disabled={disabled}
        >
            {decodeURIComponent(answer)}
        </button>
    )
}