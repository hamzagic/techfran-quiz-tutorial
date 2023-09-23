import styles from './Button.module.css';

const Button = ({ handleNext, text }) => {
    return (
        <div className={styles.container}>
            <button onClick={handleNext} className={styles.button}>
                {text}
            </button>
        </div>
    );
}

export default Button;
