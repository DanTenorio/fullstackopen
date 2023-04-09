const Notification = ({ message, type }) => {

    if (type === 'success') {
        return (
            <div className='success'>
                {message}
            </div>
        )
    }
    return null
}

export default Notification