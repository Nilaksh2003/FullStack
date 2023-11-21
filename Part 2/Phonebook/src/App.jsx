import { useState,useEffect } from 'react'
import phoneServices from './services/PhoneNumber'
import './index.css'
const Notification=({message})=>{
  if(message===null)
  {
    return null
  }
  return(
    <div className={message.type}>
      {message.message}
    </div>
  )
}
const Filter=({newFilter,setNewFilter})=>{
  return(
        <div>
          filter show with<input value={newFilter} onChange={(event)=>{setNewFilter(event.target.value)}} />
        </div>
  )
}
const Persons=({persons,deletePhoneNumber})=>{
  return(
    <>
    {persons.map((person,i)=><p key={i}>{person.name} {person.number}<button onClick={()=>{deletePhoneNumber(person)}}>Delete</button></p>)}
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
  const[message,setMessage]=useState(null)
  useEffect(()=>{
    phoneServices.getAllPhoneNumber()
    .then((initialPhoneNumbers)=>{
      setPersons(initialPhoneNumbers)
    })
  },[])
  const personToShow=newFilter===''?persons:persons.filter(person=>person.name.toLowerCase().includes(newFilter.toLowerCase())||person.number.includes(newFilter))
  const handleFormSubmit=()=>{
    event.preventDefault()
    if(!persons.some(person=>person.name===newName))
    {
      phoneServices.createPhoneNumber({name:newName,number:newNumber})
      .then((response)=>{
        setPersons(persons.concat(response))
      })
      .catch(error=>{
        setMessage({type:'error',message:error.response.data.error})
      })
    }
    else{
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`))
      {
        const person = persons.find(person=>person.name===newName)
        const changedPerson={...person , number:newNumber}
        phoneServices.updatePhoneNumber(changedPerson)
        .then((response)=>{
          setPersons(persons.map((person)=>{
            return person.id!==response.id?person:response
          })
          )
        })
        .catch(error=>{
          setMessage({type:'error',message:error.response.data.error})
        })
      }
    }
        setMessage({type:'success',message:`Added ${newName}`})
        setNewName('')
        setNewNumber('')
        setTimeout(()=>{setMessage(null)},5000);
  }
  const deletePhoneNumber=(person)=>{
    if(window.confirm(`Delete ${person.name} ?`))
    {
      phoneServices.deletePhoneNumber(person.id)
      .then((response)=>{
        if(response='OK')
        {
          phoneServices.getAllPhoneNumber()
          .then((initialPhoneNumbers)=>{
           setPersons(initialPhoneNumbers)
          })
        }
      })
      .catch(error=>{
        setMessage(
          {type:'error',message:`Information '${person.name}' was already removed from server`}
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <h3>add a new</h3>
      <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} handleFormSubmit={handleFormSubmit}  />
      <h3>Numbers</h3>
      <Persons persons={personToShow} deletePhoneNumber={deletePhoneNumber} />
    </div>
  )
}

export default App