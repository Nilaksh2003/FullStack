import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const handleFormSubmit=(event)=>{
    event.preventDefault()
    if(!persons.includes(newName))
    {
      setPersons(persons.concat(newName))
      setNewName('')
    }
    else{
      alert(`${newName} is already added to phonebook`)
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={()=>{setNewName(event.target.value)}} />
        </div>
        <div>
          <button type="submit" onClick={handleFormSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person,i)=><p key={i}>{person}</p>)}
    </div>
  )
}

export default App