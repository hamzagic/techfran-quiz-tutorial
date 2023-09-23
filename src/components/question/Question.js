import styles from './Question.module.css';

const Question = ({ question }) => {
    return (
        <div className={styles.questionContainer}>
            <h3>{question}</h3>
        </div>
    );
}

export default Question;