import { useState, useEffect } from 'react'
import WordOfDay from "./components/WordOfDay/WordOfDay";
import "./App.css";

export default function App() {
  const MWEnKey = import.meta.env.VITE_MW_EN

  const [wordOfDayEN, setWordOfDayEN] = useState(null);
  // const [wordOfDayES, setWordOfDayES] = useState(null);

  //Function to getWord
  const getWord = async (searchTerm) => {
    // make fetch request and store response
    try {
      const response = await fetch(
        //searchTerm should be replaced with the output from a function that randomizes the word pick of the day.
        `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchTerm}?key=${MWEnKey}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setWordOfDayEN(data);
    } catch (err) {
      console.error(err);
    }
  };

  //  https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=your-api-key
  // const getTranslation = async (searchTerm) => {
  //   // make fetch request and store response
  //   try {
  //     const response = await fetch(
  //       //searchTerm should be replaced with the output from a function that randomizes the word pick of the day.
  //       `https://api.giphy.com/v1/gifs/search&api_key=${apiKey}&q=${searchTerm}`
  //     );
  //     // Parse JSON response into a javascript object
  //     const data = await response.json();
  //     //set the Movie state to the movie
  //     setWordOfDay(data);
  //   } catch (e) {
  //     console.error(e);
  //   }
  //   console.log(data);
  // };

  // const getImages = async (searchTerm) => {
  //   // make fetch request and store response
  //   try {
  //     const response = await fetch(
  //       //searchTerm should be replaced with the output from a function that randomizes the word pick of the day.
  //       `https://api.giphy.com/v1/gifs/search&api_key=${apiKey}&q=${searchTerm}`
  //     );
  //     // Parse JSON response into a javascript object
  //     const data = await response.json();
  //     //set the Movie state to the movie
  //     setWordOfDay(data);
  //   } catch (e) {
  //     console.error(e);
  //   }
  //   console.log(data);
  // };

  useEffect(() => {
    getWord("reckless");
  }, []);

  return (
    <div className="app">
      <WordOfDay word={wordOfDayEN}/>
      {/* <WordOfDay word={wordOfDayES} /> */}
    </div>
  );
}
