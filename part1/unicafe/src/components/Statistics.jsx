import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
    const { good, neutral, bad } = props;
    const avg = (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad);
    const feedbackPercentage = (good / (good + neutral + bad)) * 100
    return (
        <>
            <h2>statistics</h2>
            <table>
                <tbody>
                    <StatisticLine text={'Good: '} statistic={good} />
                    <StatisticLine text={'Neutral: '} statistic={neutral} />
                    <StatisticLine text={'Bad: '} statistic={bad} />
                    <StatisticLine text={'Avg: '} statistic={new Intl.NumberFormat().format(avg)} />
                    <StatisticLine text={'Positive Feedback (in %): '} statistic={new Intl.NumberFormat().format(feedbackPercentage)} />
                </tbody>
            </table>


        </>
    )
}
export default Statistics