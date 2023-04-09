import { useEffect, useState } from 'react'
import countryService from './services/countryService.js'
import SearchBar from './components/SearchBar.jsx'
import Countries from './components/Countries.jsx'


function App() {
  const [searchText, setSearchText] = useState('')
  const [countries, setCountries] = useState(null)

  useEffect(() => {
    countryService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])

  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
  }

  if (countries === null) {
    return null
  }
  return (
    <div>
      <SearchBar handleSearchChange={handleSearchChange} searchText={searchText} />
      <Countries countries={countries} searchText={searchText} />
    </div>
  )
}

export default App
