import { useState } from "react";

export default function useRandom(...state) {
  const [random, setRandom] = useState(state)
  const [count, type, opt] = random;

  switch (type) {
    case "number": return [genRandomNumbers(count), (...args) => setRandom(args)]
    case "string":
      return (
        (opt === 'upper') || (opt === 'lower') || (opt === undefined)
          ? [genRandomLetters(count, opt), (...args) => setRandom(args)]
          : new Error("The third argument must be a 'lower' or 'upper'")
      );
    default: throw new TypeError(`Something goes to wrong ${type}`);
  }
}

function genRandomNumbers(count) {
  const randArray = []
  let cnt = count
  while (cnt > 0) {
    randArray.push(Math.floor(Math.random() * 1000 + 1))
    cnt--;
  }
  return randArray
}

function genRandomLetters(count, opt = 'lower') {
  const letters = { upper: 65, lower: 97 }
  const randLetters = []
  for (let i = 0; i < count; i++) {
    randLetters.push(String.fromCharCode(Math.floor(Math.random() * 25 + letters[opt])))
  }
  return randLetters
}

