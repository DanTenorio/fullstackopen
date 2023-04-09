import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import PhoneForm from './components/PhoneForm.jsx'
import Persons from './components/Persons.jsx'
import personservice from './services/personService.js'
import Notification from './components/Notification.jsx'
import './main.css'

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
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState(null)

  useEffect(() => {
    personservice
      .getAll()
      .then(response => {
        setPersons(response.data)
        setSearchedPersons(response.data)
      })

  }, [])

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
      personservice
        .create(newNameObject)
        .then(res => {
          const newPersons = persons.concat(res.data)
          setPersons(newPersons)
          setNewName('')
          setNewPhoneNum('')
          setSearchText('')
          setSearchedPersons(newPersons)
          setMessage(`${newName} has been added to the server`)
          setMessageType('success')
          setTimeout(() => {
            setMessage(null)
            setMessageType(null)
          }, 5000)
        })
    } else {
      if (confirm(`${newName} is already in the phonebook replace the old phone number with a new one?`)) {
        personservice
          .update(repeatedName.id, newNameObject)
          .then(res => {
            const newPersons = persons.map(person => person.id === repeatedName.id ? newNameObject : person)
            setPersons(newPersons)
            setNewName('')
            setNewPhoneNum('')
            setSearchText('')
            setSearchedPersons(newPersons)
            setMessage(`${newName} has been updated to ${newPhoneNumb}`)
            setMessageType('success')
            setTimeout(() => {
              setMessage(null)
              setMessageType(null)
            }, 5000)
          })
      }

    }

  }

  const handleDelete = (id) => {
    if (confirm('Are you sure?')) {
      personservice
        .remove(id)
        .then(res => {
          const newPersons = persons.filter(person => person.id !== id)
          console.log(newPersons)
          setPersons(newPersons)
          setSearchedPersons(newPersons)
          setNewName('')
          setNewPhoneNum('')
          setSearchText('')
        })
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} type={messageType} />
      <SearchBar searchText={searchText} handleSearchChange={handleSearchChange} />
      <h2>Numbers</h2>
      <PhoneForm newName={newName} newPhoneNumb={newPhoneNumb} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleSubmit={handleSubmit} />
      <Persons searchedPersons={searchedPersons} handleDelete={handleDelete} />
    </div>
  )
}


export default App
