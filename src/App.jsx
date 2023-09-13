import { useState, useEffect } from "react";
import WordOfDay from "./components/WordOfDay/WordOfDay";
import Search from "./components/Search/Search.jsx";
import "./App.css";

export default function App() {
  const apiKey = import.meta.env.VITE_MW_EN;

  const [wordOfDayEN, setWordOfDayEN] = useState(null);
  // const [wordOfDayES, setWordOfDayES] = useState(null);

  //Function to getWord
  const getWord = async (query) => {
    // make fetch request and store response
    try {
      const response = await fetch(
        `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${query}?key=${apiKey}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setWordOfDayEN(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getWord("lookup");
  }, []);

  return (
    <div className="app">
      <Search searchTerm={getWord} />
      <WordOfDay word={wordOfDayEN} />
    </div>
  );
}