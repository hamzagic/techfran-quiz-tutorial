import { useState, useEffect } from "react";

import Container from "../../components/container/Container";
import Header from "../../components/header/Header";
import Question from "../../components/question/Question";
import Alternative from "../../components/alternatives/Alternative";
import AlternativesContainer from "../../components/alternatives/AlternativesContainer";
import ErrorMessage from "../../components/error_message/ErrorMessage";
import Button from "../../components/button/Button";

const Quiz = ({questions, answers, setAnswers}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showError, setShowError] = useState(false);

    useEffect(() => {}, [answers]);

    const handleAnswerClicked = (index) => {
        setSelectedAnswer(index)
        setShowError(false)
    }

    const handleNext = () => {
        if (selectedAnswer === null) {
            setShowError(true)
            return
        }

        setAnswers([...answers, selectedAnswer]);
        setSelectedAnswer(null);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    return (
        <Container>
            <Header title="Super Quiz!" />
            <Question question={questions[currentQuestion].questionText} />
            <AlternativesContainer>
                {questions[currentQuestion].answerOptions.map(
                    (answerOption, index) => (
                        <Alternative
                            key={index}
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
    );
}

export default Quiz;