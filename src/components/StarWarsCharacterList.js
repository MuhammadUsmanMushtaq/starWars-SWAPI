import React, { useState, useEffect } from "react";
import StarWarsCharacter from "./StarWarsCharacter";

function StarWarsCharacterList() {
  const [characters, setCharacters] = useState([]);
  const [checkPagination, setCheckPagination] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const fetchListOfCharacters = (search, page) => {
    if (!page) {
      fetch(`https://swapi.dev/api/people/`)
        .then((response) => response.json())
        .then((jsonResponse) => {
          console.log(jsonResponse);
          setCheckPagination(jsonResponse);
          setCharacters(jsonResponse.results);
          setLoading(false);
        });
    }

    if (search) {
      fetch(`https://swapi.dev/api/people/?search=${search}`)
        .then((response) => response.json())
        .then((jsonResponse) => {
          console.log(jsonResponse);
          setCheckPagination(jsonResponse);
          setCharacters(jsonResponse.results);
          setLoading(false);
        });
      return;
    }

    if (page) {
      fetch(`https://swapi.dev/api/people/?page=${page}`)
        .then((response) => response.json())
        .then((jsonResponse) => {
          console.log(jsonResponse);
          setCheckPagination(jsonResponse);
          setCharacters(jsonResponse.results);
          setLoading(false);
        });
      return;
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchListOfCharacters(search, page);
    setLoading(false);
  }, [search, page]);

  const loadNext = (evt) => {
    setSearch("");
    evt.preventDefault();
    setPage(page + 1);
  };

  const loadPrevious = (evt) => {
    setSearch("");
    evt.preventDefault();
    setPage(page - 1);
    console.log(page);
  };

  if (loading) {
    return <p>Loading characters...</p>;
  }

  return (
    <div>
      <div className="search">
        <input
          className="search-input"
          type="text"
          placeholder="Search your favorite star wars characters"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="star-wars-character-list">
        {characters.map((character) => (
          <StarWarsCharacter key={character.name} character={character} />
        ))}
        <div
          onClick={(evt) => loadPrevious(evt)}
          className={checkPagination.previous ? "button-left" : "HIDE"}
        >
          <img src="/arrow-left.png" alt="close"></img>
        </div>
        <div
          onClick={(evt) => loadNext(evt)}
          className={checkPagination.next ? "button-right" : "HIDE"}
        >
          <img src="/arrow-right.png" alt="close"></img>
        </div>
      </div>
    </div>
  );
}

export default StarWarsCharacterList;
