const Header =(props)=>{
return (
  <h1>{props.course.name}</h1>
)
}

const Part=(props)=>{
  return(
    <p>
    {props.part.name} {props.part.exercises}
  </p>
  )
}
const Content=(props)=>{
  return(
    <>
    <Part part={props.course.parts[0]} />
    <Part part={props.course.parts[1]} />
    <Part part={props.course.parts[2]} />
    <Part part={props.course.parts[3]} />
    </>
  )
}

const Total =(props)=>{
  return(
    <b>total of {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises+props.course.parts[3].exercises} exercises</b>
  )
}

const Course=(props)=>{
return(
  <div>
    <Header course={props.course} />
    <Content course={props.course} />
    <Total course={props.course} />
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