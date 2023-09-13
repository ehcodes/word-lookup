// most recent

import Image from "../Image/Image";
import "./WordOfDay.css";

export default function WordOfDay({ word }) {
  function createUL(definition) {
    let defArr = definition.split("{bc}");
    defArr.shift();
    console.log(defArr);
  }

  return createUL("{bc}marked by lack of proper caution {bc}careless of consequences");
}
