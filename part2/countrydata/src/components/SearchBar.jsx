const SearchBar = ({ handleSearchChange, searchText }) => {
    return (
        <>
            <label>find countries</label><input value={searchText} onChange={handleSearchChange} />
        </>
    )
}

export default SearchBar