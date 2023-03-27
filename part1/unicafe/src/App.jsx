import { useState } from 'react'
import FeedbackButton from './components/FeedbackButton'



function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <FeedbackButton handleClick={() => setGood(good + 1)} name={'good'} />
      <FeedbackButton handleClick={() => setNeutral(neutral + 1)} name={'neutral'} />
      <FeedbackButton handleClick={() => setBad(bad + 1)} name={'bad'} />
      <h2>statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Avg: {(good - bad) / (good + bad)}</p>
      <p>Positive feedback(%): {(good / (good + neutral + bad)) * 100}%</p>
    </div>
  )
}

export default App
