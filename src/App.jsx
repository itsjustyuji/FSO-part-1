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


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick=()=>{setGood(good+1)}
  const neutralClick=()=>{setNeutral(neutral+1)}
  const badClick=()=>{setBad(bad+1)}
  return (
    <div>
      <Header title="give feedback" />
      <Button name="good" onClick={goodClick}/>
      <Button name="neutral"onClick={neutralClick} />
      <Button name="bad" onClick={badClick} />
      <Header title="statistics" />
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>

    </div>
  )
}

export default App