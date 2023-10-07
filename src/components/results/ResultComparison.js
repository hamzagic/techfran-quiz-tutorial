import styles from './ResultComparison.module.css';

const ResultComparison = ({ index, question, answer, correctAnswer }) => {
    return (
        <div key={index} className={styles.container}>
            <p className={styles.question}>{question}</p>
            <p className={styles.userAnswer}>
                Sua resposta: {answer}
            </p>
            <p className={styles.correctAnswer}>
                Resposta correta: {correctAnswer}
            </p>
        </div>
    );
}

export default ResultComparison
