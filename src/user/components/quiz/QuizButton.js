import React from 'react'

function QuizButton({handleClick}) {
    return (
        <div>
            <button type="button" onClick={handleClick} >
                <h1>Start New Quiz</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#444" d="M1 12h4v4H1v-4zM6 12h4v4H6v-4zM11 12h4v4h-4v-4zM1 7h4v4H1V7zM1 2h4v4H1V2zM6 7h4v4H6V7zM7 1h4v4H7V1zM11 7h4v4h-4V7zM13 0h3v3h-3V0z"/></svg>
                <p>What music suits your favourite dish?
                    Generate a playlist based on a short personality quiz!
                </p>
            </button>
        </div>
    )
}

export default QuizButton