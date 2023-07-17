/*
// Задание 1

function getMinNumber(a, b) {
return (a < b) ? a : b;
}
console.log(getMinNumber(8, 4));
console.log(getMinNumber(6, 6));


// Задание 2

function evenOddNumber(n) {
if (n % 2 === 0) {
return 'Число четное';
} else {
return 'Число нечетное';
}
}
    
console.log(evenOddNumber(8));
console.log(evenOddNumber(3));


// Задание 3.1

function calculateSquare(number) {
    let square = number * number;
    console.log(square);
    }
calculateSquare(6); 

function returnSquare(number) {
    return number * number;
}
  
console.log(returnSquare(7));

  

// Задание 4

function validateAge() {
let age = prompt("Сколько вам лет?");
    
    if (age < 0) {
        alert("Вы ввели неправильное значение");
    } 
    else if (age >= 0 && age <= 12) {
        alert("Привет, друг!");
    } 
    else if (age >= 13) {
        alert("Добро пожаловать!");
    }
}
validateAge();

// Задание 5

function calcNumbers(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      return 'Одно или оба значения не являются числом';
    } 
    else {
      return num1 * num2;
    }
}
console.log(calcNumbers(5, 4));
console.log(calcNumbers('2', 3)); 
console.log(calcNumbers(10, '5')); 
console.log(calcNumbers('7', '8'));
console.log(calcNumbers('b', '1'));


// Задание 6

function cubeNumber() {
    let input = prompt("Введите число:");
    
    if (!isNaN(input)) {
      let number = parseInt(input);
      let cube = number ** 3;
      
      return number + " в кубе равняется " + cube;
    } else {
      return "Переданный параметр не является числом";
    }
}
  
for (let i = 0; i <= 10; i++) {
    console.log(cubeNumber());
}


// Задание 7

let circle1 = {
    radius: 5,
    getArea: function() {
        return Math.PI * Math.pow(this.radius, 2); 
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius; 
    }
};

let circle2 = {
    radius: 8, 
    getArea: function() {
        return Math.PI * Math.pow(this.radius, 2); 
    },
    getPerimeter: function() {
        return 2 * Math.PI * this.radius; 
    }
};
  
  
console.log("Площадь круга 1: " + circle1.getArea());
console.log("Периметр окружности 1: " + circle1.getPerimeter());
console.log("Площадь круга 2: " + circle2.getArea());
console.log("Периметр окружности 2: " + circle2.getPerimeter());
*/
