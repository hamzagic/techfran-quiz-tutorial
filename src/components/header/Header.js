import styles from './Header.module.css';

const Header = ({title, altClass }) => {
    return (
        <div className={[styles.quizTitleContainer, altClass && styles.results].join(' ')}>
            <h1>{title}</h1>
        </div>
    );
}

export default Header;