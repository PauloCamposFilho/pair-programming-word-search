const transpose = require("./matrixTranspose");

const wordSearch = (letters, word) => {
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;