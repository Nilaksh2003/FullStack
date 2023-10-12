import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  
  const handleClickGood=()=>{
    const updateGood = good+1
    setGood(updateGood)
    setTotal(updateGood+bad+neutral)
    setAverage((updateGood-bad)/(updateGood+bad+neutral))
    setPositive((updateGood)/(updateGood+bad+neutral)*100)
  }
  const handleClickNeutral=()=>{
    const updateNeutral = neutral+1
    setNeutral(updateNeutral)
    setTotal(updateNeutral+bad+good)
    setAverage((good-bad)/(good+bad+updateNeutral))
    setPositive(((good)/(good+bad+updateNeutral))*100)
  }
  const handleClickBad=()=>{
    const updateBad = bad+1
    setBad(updateBad)
    setTotal(updateBad+good+neutral)
    setAverage((good-updateBad)/(good+updateBad+neutral))
    setPositive(((good)/(good+updateBad+neutral))*100)
  }
  return (
    <div>
      <h1>
        give feedback
      </h1>
      <p>
        <button onClick={handleClickGood}>good</button>
        <button onClick={handleClickNeutral}>neutral</button>
        <button onClick={handleClickBad}>bad</button>
      </p>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad} </p>
      <p>All {total}</p>
      <p>average {average} </p>
      <p>positive {positive}% </p>
    </div>
  )
}

export default App
