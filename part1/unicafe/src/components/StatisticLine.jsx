const StatisticLine = (props) => {
    const { text, statistic } = props
    return (
        <tr>
            <td>{text}</td><td>{statistic}{text === 'Positive Feedback (in %): ' ? <span>%</span> : null}</td>
        </tr>
    )
}

export default StatisticLine