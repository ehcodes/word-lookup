import { useState, useEffect } from "react";
import DefineWord from "./components/DefineWord/DefineWord";
import Search from "./components/Search/Search.jsx";
import Nav from "./components/Header/Header";
import "./App.css";

export default function App() {
  const apiKey = import.meta.env.VITE_MW_EN;

  const [wordData, setWordData] = useState(null);
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
      setWordData(data);
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
      <DefineWord wordInfo={wordData} />
    </div>
  );
}
