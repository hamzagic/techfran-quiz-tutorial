import Container from "../../components/container/Container";
import Header from "../../components/header/Header";
import Score from "../../components/results/Score";
import ResultComparison from "../../components/results/ResultComparison";
import Button from "../../components/button/Button";

const Results = ({ answers, questions, setAnswers }) => {
    const resetQuiz = () => {
        setAnswers([]);
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
                        key={index}
                        index={index}
                        question={q.questionText}
                        answer={q.answerOptions[answers[index]].answerText}
                        correctAnswer={
                            q.answerOptions.find((option) => option.isCorrect)
                                .answerText
                        }
                    />
                ))}
                <Button handleNext={resetQuiz} text="Back to Main" />
            </Container>
        )
    }
}

export default Results;