import './App.css'
import { useState, useEffect } from 'react'

import Quiz from './pages/quiz/Quiz'
import Results from './pages/results/Results'
import Header from './components/header/Header'
import Button from './components/button/Button'
import Container from './components/container/Container'
import { questions } from './questions'

function App() {
    const [answers, setAnswers] = useState([]);
    const [started, setIsStarted] = useState(false);

    useEffect(() => {}, [answers]);

    return (
        <>
            {!started && 
            <Container>
                <Header title="Super Quiz!" />
                <Button text="Start" handleNext={() => setIsStarted(true)} />
            </Container>
            }

            {started && answers.length < questions.length && (
                <Quiz
                    questions={questions}
                    answers={answers}
                    setAnswers={setAnswers}
                />
            )}

            {answers.length === questions.length && (
                <Results 
                  questions={questions} 
                  answers={answers} 
                  setAnswers={setAnswers}
                  setIsStarted={setIsStarted}
                />
            )}
        </>
    );
}

export default App;
