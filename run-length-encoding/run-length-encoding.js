export function encode(string) {
  let current = '';
  let previous = '';
  let acc = 1;
  let encodedString = '';
  Array.from(string).forEach(function(element) {
    if(current === '') {
      current = element;
    } else {
      previous = current;
      current = element;
      if (current === previous) {
        acc++;
      } else {
        if (acc === 1) { 
          encodedString += `${previous}`; 
        } else { 
          encodedString += `${acc}${previous}`;
          acc = 1;
        }
      }
    }
  });
  if (acc === 1) { 
    encodedString += `${current}`; 
  } else { 
    encodedString += `${acc}${current}`;
  }
  return encodedString;
} 

export function decode(string) {
  let decoded = '';
  if (string === '') return ''; 
  let group = string.split(/(\d{1,}(\s+|[a-z]{1}))/i);
  group.forEach(function(element) {
    if(!element.match(/\s/g)) {
    let times = parseInt(element.match(/\d*/)[0]) || 1;
    let letter = element.match(/[a-zA-Z\s]+/i)[0]
    decoded += repeat(times, letter);
    }
  })
  return decoded;
}

function repeat(number, character) {
  let result = '';
  for(let i=0;i<number;i++) {
    result += character;
  }
  return result;
}