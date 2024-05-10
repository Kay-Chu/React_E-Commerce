
const Search = () => {
  const handleSearch = () => {
    // For backend implement
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        style={{
          width: "300px",
          height: "40px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          paddingLeft: "10px",
        }}
        className="search_input"
      />
       <button
        onClick={handleSearch}
        className="customized_button ml-2"
      >
        Search
      </button>

    </div>
  );
};

export default Search;