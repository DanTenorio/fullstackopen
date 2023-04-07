const Persons = (props) => {
    return (
        <>
            {props.searchedPersons.map(person => {
                return (
                    <p key={person.id}>{person.name} {person.number}
                        <button onClick={() => props.handleDelete(person.id)}>Delete
                        </button>
                    </p>
                )
            })}
        </>
    )
}

export default Persons