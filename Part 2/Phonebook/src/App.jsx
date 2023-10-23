import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber]=useState('')
  const[newFilter,setNewFilter]=useState('')
  const personToShow=newFilter===''?persons:persons.filter(person=>person.name.toLowerCase().includes(newFilter.toLowerCase())||person.number.includes(newFilter))
  const handleFormSubmit=(event)=>{
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
      <div>
          filter show with<input value={newFilter} onChange={()=>{setNewFilter(event.target.value)}} />
        </div>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={()=>{setNewName(event.target.value)}} />
        </div>
        <div>
          number: <input value={newNumber} onChange={()=>{setNewNumber(event.target.value)}} />
        </div>
        <div>
          <button type="submit" onClick={handleFormSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personToShow.map((person,i)=><p key={i}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App