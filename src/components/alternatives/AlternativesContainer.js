import styles from './AlternativesContainer.module.css';

const AlternativesContainer = ({children}) => {
    return(
        <div className={styles.container}>
            {children}
        </div>
    );
}

export default AlternativesContainer;