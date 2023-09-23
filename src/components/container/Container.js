import styles from './Container.module.css';

const Container = ({children, results}) => {
    return (
        <div className={[styles.container, results && styles.results].join(' ')}>
            {children}
        </div>
    );
}

export default Container;