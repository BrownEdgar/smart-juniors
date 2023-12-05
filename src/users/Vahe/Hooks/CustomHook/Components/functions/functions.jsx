export function randomNumbers(count) {
  const arr = [];
  let cnt = count;
  while (cnt > 0) {
    arr.push(Math.floor(Math.random() * 1000 + 1));
    cnt--;
  }
  return arr;
}

export function randomLetters(count, opt = "lower") {
  const letters = { upper: 65, lower: 97 };
  const randLetters = [];
  for (let i = 0; i < count; i++) {
    randLetters.push(
      String.fromCharCode(Math.floor(Math.random() * 25 + letters[opt]))
    );
  }
  return randLetters;
}
