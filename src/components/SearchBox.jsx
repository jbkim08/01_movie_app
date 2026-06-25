const SearchBox = ({ searchValue, setSearchValue }) => {
  const handleChnage = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="col col-sm-4 me-5">
      <input
        className="form-control"
        value={searchValue}
        onChange={handleChnage}
        className="form-control"
        placeholder="영화 검색..."
      ></input>
    </div>
  );
};

export default SearchBox;
