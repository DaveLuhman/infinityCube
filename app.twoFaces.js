const fs = require("fs");
const path = require("path");

const dictionary = fs.readFileSync(
  path.join(__dirname, "wordlist.10000"),
  "utf8"
);

function prepareDictionary(dictionary) {
  let fourLetterWordList = [];
  const dictionaryArray = dictionary.split("\n");
  for (let i = 0; i < dictionaryArray.length; i++) {
    if (dictionaryArray[i].length === 4) {
      fourLetterWordList.push(dictionaryArray[i]);
    }
  }
  return fourLetterWordList;
}

function splitWord(word) {
  //   console.log(word);
  return word.toLowerCase().split(""); // now it should look like ['d', 'a', 'v', 'e']
}

// Actual Implementation:

function nestedIterator(nestedWord) {
  const nestedWordAsArray = splitWord(nestedWord);
  const E1 = nestedWordAsArray[0];
  const F1 = nestedWordAsArray[1];
  const G1 = nestedWordAsArray[2];
  const H1 = nestedWordAsArray[3];
  let newWordOne = B1 + A1 + E1 + F1;
  let newWordTwo = C1 + D1 + H1 + G1;
  if (wordList.includes(newWordOne) && wordList.includes(newWordTwo)) {
    console.log(newWordOne + " " + newWordTwo);
    return { "Word One": newWordOne, "Word Two": newWordTwo };
  }
}
function topLevelIterator(wordList) {
  const wordAsArray = splitWord(topLevelWord);
  var A1 = wordAsArray[0];
  var B1 = wordAsArray[1];
  var C1 = wordAsArray[2];
  var D1 = wordAsArray[3];
  wordList.forEach(nestedIterator(wordList));
}

function main() {
  let result = [];
  const wordList = prepareDictionary(dictionary);
  for (let i = 0; i < wordList.length; i++) {
    let topLevelWord = wordList[i];
    let topLevelWordArray = splitWord(topLevelWord);
    var A1 = topLevelWordArray[0];
    var B1 = topLevelWordArray[1];
    var C1 = topLevelWordArray[2];
    var D1 = topLevelWordArray[3];
    for (let x = 0; x < wordList.length; x++) {
      let nestedWord = wordList[x];
      let nestedWordArray = splitWord(nestedWord);
      let E1 = nestedWordArray[0];
      let F1 = nestedWordArray[1];
      let G1 = nestedWordArray[2];
      let H1 = nestedWordArray[3];
      let newWordOne = B1 + A1 + E1 + F1;
      let newWordTwo = C1 + D1 + H1 + G1;
      if (wordList.includes(newWordOne) && wordList.includes(newWordTwo)) {
      }
      result.push([newWordOne, newWordTwo]);
    }
    fs.writeFileSync("./result.csv", JSON.stringify(result));
  }
  return result.length;
}
let totalValues = main();
console.info(totalValues);

// const arrayNumberedFaces = [
//   [A1, B1, C1, D1],
//   [E1, F1, G1, H1],
//   [A4, B4, C4, D4],
//   [E2, F2, G2, H2],
//   [F3, E3, A3, B3],
//   [G3, H3, D3, C3],
//   [B1, A1, E1, F1],
//   [C1, D1, H1, G1],
//   [E3, F3, G3, H3],
//   [A3, B3, C3, D3],
//   [E4, F4, G4, H4],
//   [A2, B2, C2, D2],
//   [B5, A5, E5, F5],
//   [C5, D5, H5, G5],
//   [C6, D6, H6, G6],
//   [B6, A6, E6, F6],
// ];

// const arrayLettersOnly = [
//   [A, B, C, D],
//   [E, F, G, H],
//   [F, E, A, B],
//   [G, H, D, C],
//   [B, A, E, F],
//   [C, D, H, G],
// ]
