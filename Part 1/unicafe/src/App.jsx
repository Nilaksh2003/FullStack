import { useState } from 'react'

const StatisticLine=(props)=>{
  return(
    <p>{props.text} {props.value}</p>
  )
}
const Button=(props)=>{
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistics = (props) => {
  return(
    <>
      <h1>statistics</h1>
      <StatisticLine text='good'value={props.good} />
      <StatisticLine text='neutral'value={props.neutral} />
      <StatisticLine text='bad'value={props.bad} />
      <StatisticLine text='total'value={props.total} />
      <StatisticLine text='average'value={props.average} />
      <StatisticLine text='positive'value={props.positive +"%"} />
    </>
  )
}

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
        <Button text='good' handleClick={handleClickGood} />
        <Button text='neutral' handleClick={handleClickNeutral} />   
        <Button text='bad' handleClick={handleClickBad} /> 
      </p>
      {total?<Statistics good={good} bad={bad} neutral={neutral} average={average} positive={positive} />:'No feedback given'}
    </div>
  )
}

export default App
