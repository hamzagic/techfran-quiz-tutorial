import styles from './Alternative.module.css';

const Alternative = ({answer, clickHandler, index}) => {
    return (
        <button key={index} onClick={() => clickHandler(index)} className={styles.answerButton}>
            {answer}
        </button>
    );
}

export default Alternative;
