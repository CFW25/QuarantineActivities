import React from 'react'
import QTemplate from '../templates/questionTemplate'
const QuestionTwo = ({location}) => {
    
    return (
        <>
        <h1>{location.state.choice}</h1>
        <QTemplate page="/questionThree"/>
        </>
    )
}

export default QuestionTwo
