import { useState, useEffect } from 'react';

export default function useRandom(count, type, font = "lower") {
  const [randomElements, setRandomElements] = useState([]);

  useEffect(() => {
    let elements = [];
    const getRandomNumber = () => Math.floor(Math.random() * 1000) + 1;
    const getRandomLetter = (isUpperCase) => {
      const alphabet = isUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz';
      return alphabet[Math.floor(Math.random() * alphabet.length)];
    };

    for (let i = 0; i < count; i++) {
      let randomElement;
      if (type === 'number') {
        randomElement = getRandomNumber();
      } else if (type === 'string') {
        const isUpperCase = font === 'upper';
        randomElement = getRandomLetter(isUpperCase);
      } else {
        throw new Error('Invalid type. Supported types are "number" and "string".');
      }
      elements.push(randomElement);
    }

    setRandomElements(elements);
  }, [count, type, font]);

  return randomElements;
}