import cls from './HighScore.module.css';
const HighScores = ({ results }) => {
    if (!results || results.score <= 1) return null;

    const resArr = Object.keys(results);

    return (
        <div className={cls.high_score}>
            <h3>Your Best Score:</h3>
            <ul>
                {resArr.map((item) => (
                    <li key={item}>
                        <span>{item}: </span>
                        <span>{results[item]}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HighScores;
