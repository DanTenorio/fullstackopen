const SearchBar = (props) => {

    return (
        <>
            <label>Search</label> <input value={props.searchText} onChange={props.handleSearchChange} />
        </>
    )
}

export default SearchBar