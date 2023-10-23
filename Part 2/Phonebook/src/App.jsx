import { useState } from 'react'

const Filter=({newFilter,setNewFilter})=>{
  return(
        <div>
          filter show with<input value={newFilter} onChange={(event)=>{setNewFilter(event.target.value)}} />
        </div>
  )
}
const Persons=({persons})=>{
  return(
    <>
    {persons.map((person,i)=><p key={i}>{person.name} {person.number}</p>)}
    </>
  )
}
const PersonForm=({newName,setNewName,newNumber,setNewNumber,handleFormSubmit})=>{
  return(
    <form>
        <div>
          name: <input value={newName} onChange={(event)=>{setNewName(event.target.value)}} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(event)=>{setNewNumber(event.target.value)}} />
        </div>
        <div>
          <button type="submit" onClick={handleFormSubmit}>add</button>
        </div>
    </form>
  )
}
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber]=useState('')
  const[newFilter,setNewFilter]=useState('')
  const personToShow=newFilter===''?persons:persons.filter(person=>person.name.toLowerCase().includes(newFilter.toLowerCase())||person.number.includes(newFilter))
  const handleFormSubmit=()=>{
    event.preventDefault()
    if(!persons.some(person=>person.name===newName))
    {
      setPersons(persons.concat({name:newName,number:newNumber}))
      setNewName('')
      setNewNumber('')
    }
    else{
      alert(`${newName} is already added to phonebook`)
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <h3>add a new</h3>
      <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} handleFormSubmit={handleFormSubmit}  />
      <h3>Numbers</h3>
      <Persons persons={personToShow} />
    </div>
  )
}

export default App