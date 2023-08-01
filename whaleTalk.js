let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; ++i) {
  switch (input[i].toLowerCase()) {
    case 'e':
      resultArray.push('e');
      break;
    case 'u':
      resultArray.push('u');
      break;
  }

  for (let j = 0; j < vowels.length; ++j) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}
const resultString = resultArray.join('').toUpperCase()
console.log(resultString)