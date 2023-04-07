const Persons = (props) => {
    return (
        <>
            {props.searchedPersons.map((person, index) => <p key={index}>{person.name} {person.number}</p>)}
        </>
    )
}

export default Persons