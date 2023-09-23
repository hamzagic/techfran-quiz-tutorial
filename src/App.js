import './App.css'
import { useState, useEffect } from 'react'

import Quiz from './pages/quiz/Quiz'
import Results from './pages/results/Results'

const questions = [
    {
        questionText: 'What is the capital of France?',
        answerOptions: [
            {
                answerText: 'New York',
                isCorrect: false,
            },
            {
                answerText: 'London',
                isCorrect: false,
            },
            {
                answerText: 'Paris',
                isCorrect: true,
            },
            {
                answerText: 'Berlin',
                isCorrect: false,
            },
        ],
    },
    {
        questionText: 'Which band recorded Electric Cafe',
        answerOptions: [
            {
                answerText: 'Depeche Mode',
                isCorrect: false,
            },
            {
                answerText: 'Duran Duran',
                isCorrect: false,
            },
            {
                answerText: 'Iron Maiden',
                isCorrect: false,
            },
            {
                answerText: 'Kraftwerk',
                isCorrect: true,
            },
        ],
    },
    {
        questionText: 'Which of below options is a synth brand?',
        answerOptions: [
            {
                answerText: 'Ford',
                isCorrect: false,
            },
            {
                answerText: 'Nestle',
                isCorrect: false,
            },
            {
                answerText: 'Pirelli',
                isCorrect: false,
            },
            {
                answerText: 'Yamaha',
                isCorrect: true,
            },
        ],
    },
]

function App() {
    const [answers, setAnswers] = useState([]);

    useEffect(() => {}, [answers]);

    return (
        <>
            {answers.length < questions.length && (
                <Quiz
                    questions={questions}
                    answers={answers}
                    setAnswers={setAnswers}
                />
            )}

            {answers.length == questions.length && (
                <Results questions={questions} answers={answers} setAnswers={setAnswers} />
            )}
        </>
    );
}

export default App;
