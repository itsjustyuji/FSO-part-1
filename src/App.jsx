import { useState } from 'react'

const Header=({title})=>{
  console.log(title)
  return(
    <h1>{title}</h1>
  ) 
}

const Button=({name, onClick})=>{
  return(
    <button onClick={onClick}>{name}</button>
  )
}

const StatisticsLine=({text, val})=>{
  console.log({text})
  return(
    <div>
      {text} {val}
    </div>
  )
}

const Statistics=({good, neutral, bad, average, posPerc})=>{
  if(good===0 && neutral===0 && bad===0){
    return(
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <StatisticsLine text="good" val={good} />
      <StatisticsLine text="neutral" val={neutral} />
      <StatisticsLine text="bad" val={bad} />
      <StatisticsLine text="all" val={good+neutral+bad} />
      <StatisticsLine text="average" val={average} />
      <StatisticsLine text="positive" val={`${posPerc} %`} />

    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick=()=>{setGood(good+1)}
  const neutralClick=()=>{setNeutral(neutral+1)}
  const badClick=()=>{setBad(bad+1)}
  
  const total=good+neutral+bad
  const average=total===0?0:(good-bad)/total
  const posPerc=total===0?0:(good*100)/total
  
  return (
    <div>
      <Header title="give feedback" />
      <Button name="good" onClick={goodClick}/>
      <Button name="neutral"onClick={neutralClick} />
      <Button name="bad" onClick={badClick} />
      <Header title="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} average={average} posPerc={posPerc}/>
    </div>
  )
}

export default App