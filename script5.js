/*
// Задание 1
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 10) {
    console.log(arr[i]);
    break;
  }
  console.log(arr[i]);
}

// Задание 2

let array = [1, 5, 4, 10, 0, 3];
let index = array.indexOf(4);

console.log(index);


// Задание 3

let numbers = [1, 3, 5, 10, 20];
numbers = numbers.join(' ');
console.log(numbers);



// Задание 4
let arrMult = [];
for (let i = 0; i < 3; i++ ) {
  arrMult[i] = []; 
 for (let j = 0; j < 3; j++) {
  arrMult[i].push(1); 
    }
}
console.log(arrMult);


// Задание 5

let oneNumbers = [1, 1, 1];
oneNumbers.push(2, 2, 2);
console.log(oneNumbers);

// Задание 6

let sortNumbers = [9, 8, 7, 'a', 6, 5];
sortNumbers.sort();
console.log(sortNumbers.pop());
console.log(sortNumbers);


// Задание 7

let arr = [9, 8, 7, 6, 5];
let n = number(promt('Введите число'));
if (arr.includes(n)) {
	alert('Вы угадали');
} else {
	alert('Вы не угадали');
}


// Задание 8

let alphabet = 'abcdef';
let reverseAlphabet = alphabet.split('').reverse().join('');
console.log(reverseAlphabet);


// Задание 9

let arr = [[1, 2, 3,],[4, 5, 6]];
let unionArr = arr.flat(Infinity);
console.log(unionArr);


// Задание 10

let arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length - 1; i++) {
  let sum = arr[i] + arr[i + 1];
  console.log(sum);
}


// Задание 11

let arr = [5, 2, 3];
const squareNumber = arr.map((number) => number ** 2);
console.log(squareNumber);



// Задание 12

const getLengthWords = source => source.map(str => str.length);
console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));


// Задание 13

function getNegativeNumbers(arr) {
	let negativeNumbers = [];
	for (let i = 0; i < arr.length; i++) {
	  if (arr[i] < 0) {
		negativeNumbers.push(arr[i]);
	  }
	}
	return negativeNumbers;
}
  
let numbers = [1, -2, 3, -4, 5];
let negativeNumbers = getNegativeNumbers(numbers);
console.log(negativeNumbers); 
*/