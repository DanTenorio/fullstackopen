import { useState } from 'react'
import FeedbackButton from './components/FeedbackButton'
import Statistics from './components/Statistics'



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
      {(good != 0 || neutral != 0 || bad != 0) ? <Statistics good={good} neutral={neutral} bad={bad} /> : <><h2>statistics</h2><p>No feedback given</p></>}
    </div>
  )
}

export default App
