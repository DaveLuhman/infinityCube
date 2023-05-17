const fs = require("fs");
const path = require("path");
const query = require("cli-interact").getYesNo;

// loads dictionary file to memory
const dictionary = fs.readFileSync(path.join(__dirname, "gcide.txt"), "utf8");
/**
 *
 * @param {string} dictionary new-line separated list of words
 * @returns {array} list of four-letter words
 */
function prepareDictionary(dictionary) {
  let fourLetterWordList = [];
  const dictionaryArray = dictionary.split("\r\n");
  for (let i = 0; i < dictionaryArray.length; i++) {
    if (dictionaryArray[i].length === 4) {
      fourLetterWordList.push(dictionaryArray[i].toLowerCase());
    }
  }
  return fourLetterWordList;
}

/**
 *
 * @param {string} word
 * @returns {array} word as array of letters
 */
function splitWord(word) {
  //   console.log(word);
  return word.toLowerCase().split(""); // now it should look like ['d', 'a', 'v', 'e']
}

/**
 *
 * @param {string} wordToCheck
 * @param {array} wordArray
 * @returns
 */
function uniqueWord(wordToCheck, wordArray) {
  let count = 0;
  for (let i = 0; i < wordArray.length; i++) {
    if (wordToCheck == wordArray[i]) {
      count++;
    }
    if (count > 1) return false;
  }
  return true;
}

/**
 * iterates through words and returns true if they're unique to each other.
 * @param {array} wordArray
 * @return {boolean}
 */
function iUniqueWord(wordArray) {
  for (let i = 0; i < wordArray.length; i++) {
    const word = wordArray[i];
    if (uniqueWord(word, wordArray) == false) return false;
  }
  return true;
}
function main() {
  let resultArray = [];
  const wordList = prepareDictionary(dictionary);
  for (let i = 0; i < wordList.length; i++) {
    let abcd = wordList[i];
    let abcdArray = splitWord(abcd);
    var A = abcdArray[0];
    var B = abcdArray[1];
    var C = abcdArray[2];
    var D = abcdArray[3];
    for (let x = 0; x < wordList.length; x++) {
      let efgh = wordList[x];
      let efghArray = splitWord(efgh);
      let E = efghArray[0];
      let F = efghArray[1];
      let G = efghArray[2];
      let H = efghArray[3];
      let wordOne = abcd;
      let wordTwo = efgh;
      let wordThree = B + A + E + F;
      let wordFour = C + D + H + G;
      let wordFive = F + E + A + B;
      let wordSix = G + H + D + C;
      const wordArray = [
        wordOne,
        wordTwo,
        wordThree,
        wordFour,
        wordFive,
        wordSix,
      ];
      if (
        (wordList.includes(wordThree) && wordList.includes(wordFour),
        wordList.includes(wordFive) &&
          wordList.includes(wordSix) &&
          iUniqueWord(wordArray))
      ) {
        console.log(wordArray + " is a valid combination");
        resultArray.push(wordArray);
      }
    }
    if (i % 100 == 0) {
      let qContinue = query('2500 combinations have been tested.' + resultArray.length + ' good combinations have been found. Continue?');
      if ((qContinue.answer = false)) return process.exitCode = 1;
    }
  }
  fs.writeFileSync("./result.csv", JSON.stringify(resultArray));
  return resultArray.length;
}
main();

console.info(
  "Found " + (main() || 0) + " possible combinations, saved in ./result.csv"
);

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
