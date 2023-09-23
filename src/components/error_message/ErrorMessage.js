import styles from './ErrorMessage.module.css';

const ErrorMessage = ({text}) => {
    return (
        <div className={styles.container}>
            <p>{text}</p>
        </div>
    );
}

export default ErrorMessage;