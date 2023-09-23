import './App.css'
import { useState, useEffect } from 'react'
import Container from './components/container/Container'
import Header from './components/header/Header'
import Question from './components/question/Question'
import Alternative from './components/alternatives/Alternative'
import AlternativesContainer from './components/alternatives/AlternativesContainer'
import ErrorMessage from './components/error_message/ErrorMessage'
import Button from './components/button/Button'
import Score from './components/results/Score'
import ResultComparison from './components/results/ResultComparison'

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
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [answers, setAnswers] = useState([])
    const [showError, setShowError] = useState(false)

    useEffect(() => {}, [answers])

    const handleAnswerClicked = (index) => {
        setSelectedAnswer(index)
        setShowError(false)
    }

    const handleNext = () => {
        if (selectedAnswer === null) {
            setShowError(true)
            return
        }

        setAnswers([...answers, selectedAnswer])
        setSelectedAnswer(null)

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    if (answers.length === questions.length) {
        const correctAnswers = answers.filter(
            (answer, index) => questions[index].answerOptions[answer].isCorrect
        ).length

        return (
            <Container results={true}>
                <Header title="Results" altClass="results" />
                <Score correct={correctAnswers} total={questions.length} />
                {questions.map((q, index) => (
                    <ResultComparison
                        index={index}
                        question={q.questionText}
                        answer={q.answerOptions[answers[index]].answerText}
                        correctAnswer={
                            q.answerOptions.find((option) => option.isCorrect)
                                .answerText
                        }
                    />
                ))}
                <Button handleNext={() => {}} text="Back to Main" />
            </Container>
        )
    }

    return (
        <Container>
            <Header title="Super Quiz!" />
            <Question question={questions[currentQuestion].questionText} />
            <AlternativesContainer>
                {questions[currentQuestion].answerOptions.map(
                    (answerOption, index) => (
                        <Alternative
                            clickHandler={() => handleAnswerClicked(index)}
                            answer={answerOption.answerText}
                        />
                    )
                )}
            </AlternativesContainer>

            {showError && <ErrorMessage text="Please select an answer!" />}
            <Button
                handleNext={handleNext}
                text={
                    currentQuestion === questions.length - 1
                        ? 'Finish Quiz'
                        : 'Next'
                }
            />
        </Container>
    )
}

export default App
