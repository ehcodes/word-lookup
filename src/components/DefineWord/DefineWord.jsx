import "./DefineWord.css";

export default function DefineWord({ wordInfo }) {
  console.log(wordInfo);
  
  function createUL(definition) {
    let defArr = definition.split("{bc}");
    defArr.shift();
    console.log(defArr);
  }

  const definitions = [];
  for(let property in wordInfo) {
    definitions.push(property);
  }

  console.log(definitions);
  console.log(Array.isArray(definitions));

  const loaded = () => {
    return (
      <div className="DefineWord">
        <h1>{wordInfo[0].meta.id.toUpperCase()}</h1>
        {definitions.map((definition, index) => {
          return (
            <div key={index}>
              {console.log(definition)}
              <h2>{wordInfo[index].fl}</h2>
              <p>{wordInfo[index].def[0].sseq[0][0][1].dt[0][1]}</p>
            </div>
          );
        })}
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

  return wordInfo ? loaded() : loading();
}
