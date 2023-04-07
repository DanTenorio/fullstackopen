const Persons = (props) => {
    console.log(props)
    return (
        <>
            {props.searchedPersons.map(person => <p key={person.id}>{person.name} {person.number}<button onClick={handleDelete}>Delete</button></p>)}
        </>
    )
}

export default Persons