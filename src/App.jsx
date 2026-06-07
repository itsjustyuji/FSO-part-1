const Header=({course})=>{
  return(
    <h1>{course.name}</h1>
    
  )
}

const Part=({part})=>{
  return(
    <p>
        {part.name} {part.exercises}
    </p>
  )
}

const Content=({parts})=>{
  return(
     <div>
      <Part part={parts.parts[0]} />
      <Part part={parts.parts[1]}/>
      <Part part={parts.parts[2]}/>
    </div>
  )
}

const Total=(props)=>{
  return(
    <p>Number of exercises {props.total.parts[0].exercises + props.total.parts[1].exercises + props.total.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content  parts={course}/>
      <Total total={course} />
    </div>
  )
}

export default App


