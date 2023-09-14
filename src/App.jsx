import { useState, useEffect } from "react";
import DefineWord from "./components/DefineWord/DefineWord";
import Search from "./components/Search/Search.jsx";
import Header from "./components/Header/Header";
import "./App.css";

export default function App() {
  // will revist this when refactoring this app
  // const apiKey = import.meta.env.VITE_MW_EN;
  const mwLlave = '4c386f24-5924-4f2d-99d7-9514c74a9a9d'
  const [wordData, setWordData] = useState(null);

  //Function to getWord
  const getWord = async (query) => {
    try {
      const response = await fetch(
        `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${query}?key=${mwLlave}`
      );
      const data = await response.json();
      setWordData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getWord("lookup");
  }, []);

  return (
    <div className="App">
      <Header/>
      <Search searchTerm={getWord} />
      <DefineWord wordInfo={wordData} />
    </div>
  );
}
