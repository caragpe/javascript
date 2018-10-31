function reverseString(string) {
  if (!!string) {
    return Array.from(string).reverse().join("");
  } else { return ""; }
}

module.exports = reverseString;