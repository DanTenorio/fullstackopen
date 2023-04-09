import { useState } from "react"
import Country from "./Country"

const Countries = ({ countries, searchText }) => {

    const [searchedCountries, setSearchedCountries] = useState(countries.filter(country => country.name.common.toLowerCase().includes(searchText.toLowerCase())))

    const handleCountryClick = (country) => {
        setSearchedCountries(searchedCountries.filter(c => c === country))
    }


    if (searchedCountries.length === 1) {
        const country = searchedCountries[0]
        return (
            <>
                <Country country={country} />
            </>
        )
    }

    if (searchedCountries.length > 10) {
        return <div>Too many matches, specify another filter</div>
    }

    return (
        <div>
            <ul>
                {searchedCountries.map(country => <li key={country.population}>{country.name.common}<button onClick={() => handleCountryClick(country)}>Show</button></li>)}
            </ul>
        </div>
    )
}

export default Countries