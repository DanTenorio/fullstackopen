const Country = ({ country }) => {
    const languages = Object.values(country.languages)
    return (
        <>
            <h1>{country.name.common}</h1>
            <p>Captial: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h2>Languages</h2>
            <ul>
                {languages.map((language, index) => <li key={index}>{language}</li>)}
            </ul>
            <img src={country.flags.png} />
        </>
    )
}

export default Country