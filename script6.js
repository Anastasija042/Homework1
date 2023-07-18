

// Задание 1

const word = 'js';
console.log(word.toUpperCase());


// Задание 2

function searchStart(words, prefix) {
return words.filter(word => word.toLowerCase().startsWith(prefix.toLowerCase()));
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); 
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); 
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); 

// Задание 3

let number = 32.58884;

let roundingDown = Math.floor(number);
let roundingUp = Math.ceil(number);
let nearestInteger = Math.round(number);


console.log(roundingDown);
console.log(roundingUp);
console.log(nearestInteger);

// Задание 4

let numbers = [52, 53, 49, 77, 21, 32];

let minNumber = Math.min.apply(null, numbers);
let maxNumber = Math.max.apply(null, numbers);

console.log("Наименьшее число: " + minNumber);
console.log("Наибольшее число: " + maxNumber);

// Задание 5

function getRandomInt(minValue, maxValue) {
    return Math.round (Math.random() * maxValue);
}
console.log(getRandomInt(1, 10));



// Задание 6

function getRandomArrNumbers(number) {
    let length = Math.floor(number / 2); 
    let arr = [];
  
    for (let i = 0; i < length; i++) {
      let randomNum = Math.floor(Math.random() * (number + 1)); 
      arr.push(randomNum); 
    }
  
    return arr;
}
  
console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

// Задание 7

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1, 10));
console.log(getRandomNumber(-5, 5));

// Задание 8

let currentDate = new Date();
console.log(currentDate);



// Задание 9

let currentDate = new Date();
let futureDate = new Date(); 
futureDate.setDate(currentDate.getDate() + 73);

console.log(futureDate.toDateString()); 


// Задание 10

function formatDate(date) {
    let daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  
    let formattedDate = 'Дата: ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' - это ' + daysOfWeek[date.getDay()] + '.\n';
    formattedDate += 'Время: ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  
    return formattedDate;
}
  
  
let currentDate = new Date();
let formattedDate = formatDate(currentDate);
console.log(formattedDate);



// Задание 11

let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

words = words.sort(() => Math.random() - 0.5);

alert(words);

let firstWord = prompt("Чему равнялся первый элемент массива?");
let lastWord = prompt("Чему равнялся последний элемент массива?");

if (firstWord === words[0] && lastWord === words[words.length - 1]) {
    alert("Поздравляем! Вы угадали оба элемента!");
} 
else if (firstWord === words[0] || lastWord === words[words.length - 1]) {
    alert("Вы были близки к победе!");
} 
else {
    alert("Вы ответили неверно.");
}
*/