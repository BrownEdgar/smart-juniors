import { useState } from "react";
import * as func from '../functions/functions'

export default function useRandom(...state) {
  const [random, setRandom] = useState(state)
  const [count, type, opt] = random;

  switch (type) {
    case "number": return [func.randomNumbers(count), (...args) => setRandom(args)]
    case "string":
      return (
        (opt === 'upper') || (opt === 'lower') || (opt === undefined)
          ? [func.randomLetters(count, opt), (...args) => setRandom(args)]
          : new Error("The third argument must be a 'lower' or 'upper'")
      );
    default: throw new TypeError(`Something goes to wrong ${type}`);
  }
}