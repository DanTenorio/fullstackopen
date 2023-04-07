import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newNameObject = {
      name: newName
    }
    const repeatedName = persons.find(person => JSON.stringify(person.name) === JSON.stringify(newName))

    if (repeatedName === undefined) {
      setPersons(persons.concat(newNameObject))
      setNewName('  ')
    } else {
      alert(`${newName} is already in the phonebook`)
    }

  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => <p key={index}>{person.name}</p>)}
    </div>
  )
}


export default App
