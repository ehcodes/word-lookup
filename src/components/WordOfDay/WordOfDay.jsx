import Image from "../Image/Image";
import "./WordOfDay.css";

export default function WordOfDay({ word }) {
  console.log(word);
  
  function createUL(definition) {
    let defArr = definition.split("{bc}");
    defArr.shift();
    console.log(defArr);
  }

  const definitions = [];
  for(let property in word) {
    definitions.push(property);
  }

  console.log(definitions);
  console.log(Array.isArray(definitions));

  const loaded = () => {
    return (
      <div className="WordOfDay">
        <h1>{word[0].meta.id.toUpperCase()}</h1>
        {definitions.map((definition, index) => {
          return (
            <div key={index}>
              {console.log(definition)}
              <h2>{word[index].fl}</h2>
              <p>{word[index].def[0].sseq[0][0][1].dt[0][1]}</p>
            </div>
          );
        })}
        <Image />
        {createUL(
          "{bc}marked by lack of proper caution {bc}careless of consequences"
        )}
      </div>
    );
  };

  const loading = () => {
    return (
      <div className="app">
        <h1>Please wait...</h1>
      </div>
    );
  };

  return word ? loaded() : loading();
}
