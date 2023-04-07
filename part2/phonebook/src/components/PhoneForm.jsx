const PhoneForm = (props) => {
    console.log(props)
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    name: <input value={props.newName} onChange={props.handleNameChange} />
                </div>
                <div>
                    phone number: <input value={props.newPhoneNumb} onChange={props.handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default PhoneForm