function longestPrefix(strs) {
  if (strs.length === 0) return "";

  let minLength = strs[0].length;
  for (let i = 1; i < strs.length; i++) {
    minLength = Math.min(minLength, strs[i].length);
  }

  let longestPrefix = "";

  for (let i = 0; i < minLength; i++) {
    let currentChar = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== currentChar) {
        return longestPrefix;
      }
    }
    longestPrefix += currentChar;
  }
  return longestPrefix;
}

const strsExample1 = ["flower", "flow", "flight"];
console.log(longestPrefix(strsExample1));

const strsExample2 = ["dog", "racecar", "car"];
console.log(longestPrefix(strsExample2));
