export function encode(string) {
  if (string === '') {
    return '';
  } else {
    let stringArray = Array.from(string);
    return transverseArrayOfEquals(stringArray)
  };
}

function countCharacterOccurrencesOf(character, array) {
  let occurrences = array.filter(function(element) {
    return element === character
  }).length
  if (occurrences > 1) {
    return occurrences;
  } else {
    return '';
  }
}

function transverseArrayOfEquals(array) {
  let encoded = '';
  let start = 0;
  let end = 0;
  let previous = array[0];
  array.map(function(element) {
    if( element === previous) {
      end +=1;
    } else {
      let count = countCharacterOccurrencesOf(previous,array.slice(start, end));
      encoded += count + previous;
      previous = element;
      start = end;
      end += 1; 
    };
  });
  let count = countCharacterOccurrencesOf(previous,array.slice(start));
  encoded += count + previous;
  
  return encoded;
}

export function decode(string) {
  if (string === '') {
    return '';
  } else {
    let decoded = ''
    let stringArray = Array.from(string);
    let count = [];
  
    stringArray.map( function(element) {
      if (element.match(/([a-zA-Z]|\s)/)) {
        decoded += charTimes(element, Number(count.join('')));
        count = [];
      } else {
        count.push(Number(element)) 
      }
    });
    return decoded;
  }
}

function charTimes(char, times) {
  if (times > 1) {
    return char + charTimes(char, times -1)
  } else {
    return char
  }
}