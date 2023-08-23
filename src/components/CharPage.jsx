import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharViewPage from "./CharViewPage";

const CharPage = () => {
  const params = useParams();
  const charId = params.id;

  const [charData, setCharData] = useState();

  const fetchCharacter = async (charId) => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${charId}`
      );
      const data = await res.json();
      setCharData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (charId) fetchCharacter(charId);
  }, []);

  return <CharViewPage charData={charData} />;
};

export default CharPage;
