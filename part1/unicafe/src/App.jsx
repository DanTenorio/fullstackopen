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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
