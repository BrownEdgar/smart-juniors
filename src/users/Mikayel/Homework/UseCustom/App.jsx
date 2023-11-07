import useRandom from './useRandom';

export default function App() {
  const randomNumbers = useRandom(4, 'number');
  const randomLowercaseLetters = useRandom(4, 'string', 'lower');
  const randomUppercaseLetters = useRandom(6, 'string', 'upper');

  return (
    <div>
      <h2>Random Numbers: {randomNumbers.join(', ')}</h2>
      <h2>Random Lowercase Letters: {randomLowercaseLetters.join(', ')}</h2>
      <h2>Random Uppercase Letters: {randomUppercaseLetters.join(', ')}</h2>
    </div>
  )
}