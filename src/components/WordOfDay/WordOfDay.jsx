// most recent

import Image from "../Image/Image";
import "./WordOfDay.css";

export default function WordOfDay({ word }) {
  console.log(word);
  console.log(typeof word);

  const definitions = [];
  for (let property in word) {
    definitions.push(property);
  }

  console.log(definitions);
  console.log(typeof definitions);
  return (
    <div className="WordOfDay">
      <h1>{word[0].meta.id.toUpperCase()}</h1>
      {definitions.length.map((key, index) => {
        return (
          <div key={index}>
            {console.log(definitions[index])}
            <h2>{word[index].fl}</h2>
            <p>{word[index].def[0].sseq[0][0][1].dt[0][1]}</p>
          </div>
        );
      })}
      <Image />
    </div>
  );
}

function createUL(definition) {
  let defArr = definition.split("{bc}");
  defArr.unshift()
  return defArr;
}

console.log(
  createUL("{bc}marked by lack of proper caution {bc}careless of consequences")
);