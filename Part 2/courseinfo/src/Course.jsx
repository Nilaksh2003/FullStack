const Header =({name})=>{
    return (
      <h2>{name}</h2>
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
        {parts.map(tempPart=><Part key={tempPart.id} part={tempPart} />)}
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
    export default Course