import { useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import PhoneForm from './components/PhoneForm.jsx'
import Persons from './components/Persons.jsx'

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
  const [searchText, setSearchText] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (e) => {
    setNewPhoneNum(e.target.value)
  }

  const handleSearchChange = (e) => {
    const searchText = e.target.value
    setSearchText(searchText)
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
      const newPersons = persons.concat(newNameObject)
      setPersons(newPersons)
      setNewName('')
      setNewPhoneNum('')
      setSearchText('')
      setSearchedPersons(newPersons)
    } else {
      alert(`${newName} is already in the phonebook`)
    }

  }


  return (
    <div>
      <h2>Phonebook</h2>
      <SearchBar searchText={searchText} handleSearchChange={handleSearchChange} />
      <h2>Numbers</h2>
      <PhoneForm newName={newName} newPhoneNumb={newPhoneNumb} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleSubmit={handleSubmit} />
      <Persons searchedPersons={searchedPersons} />
    </div>
  )
}


export default App
