import React, { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import { FaSearch } from "react-icons/fa";

const CharList = () => {
  const [characterList, setCharacterList] = useState([]);
  const [filteredCharacterList, setFilteredCharacterList] = useState([]);
  const [search, setSearch] = useState("");
  const [genderSearch, setGenderSearch] = useState("");
  const [statusSearch, setStatusSearch] = useState("");

  const fetchCharacters = async () => {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setCharacterList(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  useEffect(() => {
    let filteredList = characterList;

    if (search) {
      filteredList = filteredList.filter((char) =>
        char.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (genderSearch) {
      filteredList = filteredList.filter(
        (char) => char.gender === genderSearch
      );
    }

    if (statusSearch) {
      filteredList = filteredList.filter(
        (char) => char.status === statusSearch
      );
    }

    setFilteredCharacterList(filteredList);
  }, [search, genderSearch, statusSearch, characterList]);

  let content;

  if (!filteredCharacterList?.length) {
    content = "No Data Available";
  } else {
    content = filteredCharacterList.map((char) => (
      <Card char={char} key={char.id} />
    ));
  }

  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-4 px-10 py-10">
      <div className="flex items-center w-full justify-evenly">
        <div className="relative w-1/3">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Charater"
            className="flex-1 w-full px-3 py-2 rounded-lg outline-none"
          />
          <FaSearch className="absolute text-xl text-gray-600 right-3 top-2"/>
        </div>
        <div className="flex items-center justify-center w-1/3 space-x-3">
          <label htmlFor="Gender" className="font-bold text-white">
            Filter By Gender :
          </label>

          <select
            name="Gender"
            id="Gender"
            onChange={(e) => setGenderSearch(e.target.value)}
            className="px-3 py-2 overflow-hidden rounded-lg outline-none"
          >
            <option value="" defaultValue>All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div className="flex items-center justify-center w-1/3 space-x-3">
          <label htmlFor="Gender" className="font-bold text-white">
            Filter by Life Status :
          </label>
          <select
            name="Status"
            id="Status"
            onChange={(e) => setStatusSearch(e.target.value)}
            className="px-3 py-2 overflow-hidden rounded-lg outline-none"
          >
            <option value="" defaultValue>All</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 py-10">
        {content}
      </div>
    </div>
  );
};

export default CharList;
