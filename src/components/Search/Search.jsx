import { useState, useEffect } from "react";
import "./Search.css";

export default function Search({ searchTerm }) {
  //State to hold the data of our form
  const [search, setSearch] = useState({
    term: "",
  });

  //handleChange - updates formData when we type into form
  const handleChange = (e) => {
    //use the event object to detect key and value to update
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    //prevent page from refreshing on form submission
    e.preventDefault();
    //pass the search term to moviesearch prop, which is apps getMovie function
    searchTerm(search.term);
  };

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="searchBar"
          placeholder="search"
          type="text"
          name="term"
          onChange={handleChange}
          value={search.term}
        />
        <input className="searchBtn" type="submit" value="submit" />
      </form>
    </>
  );
}
