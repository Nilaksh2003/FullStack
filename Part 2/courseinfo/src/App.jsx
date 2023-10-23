const Header =({name})=>{
return (
  <h1>{name}</h1>
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
    <>
    {parts.map((tempPart,i)=><Part key={i} part={tempPart} />)}
    </>
  )
}

const Total =({parts})=>{
  return(
    <b>total of {parts.reduce((s, p) => s + p.exercises ,0)} exercises</b>
  )
}

const Course=({course})=>{
return(
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
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
      },
      {
        name:'Redux',
        exercises:11
      }
    ]
  }
  return (
    <Course course={course} />
  )
}

export default App