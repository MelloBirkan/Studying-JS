// Kelvin current temperature
const kelvin = 293;
const celsius = kelvin - 273;
// Celsius to Fahrenheit formula
let fahrenheit = (celsius * (9/5) + 32);
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature in newton is: ${newton}`);