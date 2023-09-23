const Score = ({correct, total}) => {
    return (
        <div>
            <h2>Your score: {correct} out of {total}</h2>
        </div>
    );
}

export default Score;
