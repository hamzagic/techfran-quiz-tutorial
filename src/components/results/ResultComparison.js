import styles from './ResultComparison.module.css';

const ResultComparison = ({ index, question, answer, correctAnswer }) => {
    return (
        <div key={index} className={styles.container}>
            <p className={styles.question}>{question}</p>
            <p className={styles.userAnswer}>
                Your answer: {answer}
            </p>
            <p className={styles.correctAnswer}>
                Correct Answer: {correctAnswer}
            </p>
        </div>
    );
}

export default ResultComparison
