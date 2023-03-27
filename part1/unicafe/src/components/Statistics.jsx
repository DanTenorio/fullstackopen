const Statistics = (props) => {
    const { good, neutral, bad } = props;
    return (
        <>
            <h2>statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Avg: {(good - bad) / (good + bad)}</p>
            <p>Positive feedback(%): {(good / (good + neutral + bad)) * 100}%</p>
        </>
    )
}
export default Statistics