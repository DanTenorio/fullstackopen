import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '000-000-0000' },
    { name: 'Ada Lovelace', number: '000-000-0000' },
    { name: 'Danny Tenorio', number: '000-000-0000' },
    { name: 'John B Jovi', number: '000-000-0000' }
  ])
  const [searchedPersons, setSearchedPersons] = useState(persons)
  const [newName, setNewName] = useState('')
  const [newPhoneNumb, setNewPhoneNum] = useState('000-000-0000')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (e) => {
    setNewPhoneNum(e.target.value)
  }

  const handleSearchChange = (e) => {
    const searchText = e.target.value
    const newSearchedPersons = persons.filter(person => person.name.toLowerCase().includes(searchText))
    setSearchedPersons(newSearchedPersons)
    console.log(newSearchedPersons);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newNameObject = {
      name: newName,
      number: newPhoneNumb
    }
    const repeatedName = persons.find(person => JSON.stringify(person.name) === JSON.stringify(newName))

    if (repeatedName === undefined) {
      setPersons(persons.concat(newNameObject))
      setNewName('')
      setNewPhoneNum('')
    } else {
      alert(`${newName} is already in the phonebook`)
    }

  }


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <label>Search</label> <input onChange={handleSearchChange} />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          phone number: <input value={newPhoneNumb} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {searchedPersons.map((person, index) => <p key={index}>{person.name} {person.number}</p>)}
    </div>
  )
}


export default App
