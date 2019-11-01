// Array
// номерация элементов в массиве начинается с нуля
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const numbersOfElements = numbers.length; //-- количество элементов в массиве
console.log(numbersOfElements);

console.log('Element #1 ' + numbers[1]); //-- выведит второй элемент массива т. е. 2
console.log('Element #1 ' + numbers[0]); //-- выведит первый элемент массива т. е. 1
console.log('Element #1 ' + numbers[numbers.length - 1]); //-- выведит последний элемент массива т. е. 8




console.log(Array.isArray([])); // -- Array.isArray() проверяет передали ли мы массив или нет

// примеры
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function getArrayBound(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    return [arr.length, arr[0], arr[arr.length - 1]];
}
const arrayBound = getArrayBound(numbers);

console.log(arrayBound);




// перебор массива
// цикл for

const numbers = [11, 22, 33, 55, 66];

// найдем сумму

function sum(numbers) {
    let sumOfNumbers = 0;
    for (let i = 0; i < numbers.length; i++) {
        // console.log(numbers[i]);
        sumOfNumbers += numbers[i];
    }
    return sumOfNumbers;
}

const sumOfElements = sum(numbers);

console.log('Result: ' + sumOfElements);



// Объекты передаются по ссылке

const numbers = [11, 22, 33, 55, 66];

const arr = numbers;

arr[2] = 1000;

console.log(numbers);



//методы .pop(), .push(), .shift(), .unshift()

const people = ['Tom', 'Ann', 'Bob'];

people[3] = 'Jack'; // плохая практика добавлять элемент массива через индекс
people[people.length] = 'Andrei'; // хорошая практика
console.log(people);

people.push('Jack'); // метод push() добавляет элемент в конец массива
console.log(people);

people.unshift('Doremi'); //метод unshift() добавляет в начало элемент 
console.log(people);

people.pop('Doremi'); //метод pop() удаляет элемент из конца 
console.log(people);

const first = people.shift(); //метод shift() удаляет элементы сначала и возвращает его(их) 
console.log(first);