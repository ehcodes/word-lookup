import "./DefineWord.css";

export default function DefineWord({ wordInfo }) {
  console.log(wordInfo);

  // some words have multiple definitions for the type of speech i.e. adjective, noun, verb
  // this function takes the string provided by the API and splits those definitions.
  function splitDefinition(definition) {
    let defArr = definition.split(`{bc}`);
    defArr.shift();
    return defArr;
  }

  // mw API comes with 'tokens' that dictate styling on their own website
  // tokens are removed by this function
  function checkForAPITokens(defArr) {
    // an array of all the API 'tokens' that may render
    const apiTokens = [
      "{b}",
      "\\/b}",
      "{bc}",
      "{inf}",
      "\\/inf}",
      "{it}",
      "\\/it}",
      "{ldquo}",
      "{p_br}",
      "{rdquo}",
      "{sc}",
      "\\/sc}",
      "{sup}",
      "\\/sup}",
      "{gloss}",
      "\\/gloss}",
      "{parahw}",
      "\\/phrase}",
      "{phrase}",
      "{qword}",
      "\\/qword}",
      "\\/wi}",
      "{wi}",
      "{dx}",
      "{dx_def}",
      "{dx_ety}",
      "{ma}",
      "\\/dx}",
      "\\/dx_def}",
      "\\/dx_ety}",
      "\\/ma}",
      "{a_link|",
      "{d_link||",
      "{dxt|||",
      "{et_link||",
      "{i_link||",
      "{mat||",
      "{sx|||",
      "{ds}",
    ];

    // stripped definition array that will be returned at the end of this function
    let tokenlessDefArr = [];
    
    console.log(tokenlessDefArr);
    defArr.forEach((def) => {
      let bracelessDef;
      console.log(def);
      for (let apiToken of apiTokens) {
        if (def.includes(apiToken)) {
          // remove token from definition
          bracelessDef = def.replaceAll(apiToken, "");
          def = bracelessDef.replace(/[{}]/g, "");
          tokenlessDefArr.push(def);
        }
      }
      bracelessDef = def.replace(/[{}]/g, "");
      // then remove lingering brackets
      tokenlessDefArr.length>0 ? null : tokenlessDefArr.push(def);
    });
    console.log(tokenlessDefArr);
    return tokenlessDefArr;
  }

  const definitions = [];
  for (let property in wordInfo) {
    definitions.push(property);
  }

  console.log(definitions);
  // console.log(Array.isArray(definitions));

  const loaded = () => {
    return (
      <div className="DefineWord">
        <h1 className="definedWord">{wordInfo[0].meta.id.toUpperCase()}</h1>
        <section className="variants">
          {/* loops through the different variants of the word */}
          {wordInfo[0].meta.stems.map((variant, index) => {
            return (
              <p className="variant" key={variant}>
                {wordInfo[0].meta.stems[index]}
              </p>
            );
          })}
        </section>
        {/* loops through the different definitions provided for the word */}
        {wordInfo.map((definition, index) => {
          return (
            <div key={index}>
              {console.log(definition)}
              <h2>{wordInfo[index].fl}</h2>
              <p>
                {checkForAPITokens(splitDefinition(
                  wordInfo[index].def[0].sseq[0][0][1].dt[0][1]
                ))}
                {/* {wordInfo[index].def[0].sseq[0][0][1].dt[0][1]} */}
              </p>
            </div>
          );
        })}

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
