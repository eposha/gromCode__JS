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
// так же есть продвинутый метод перебора массива for of
//пример 
const numbers = [11, 22, 33, 55, 66];

function sum(numbers) {
    let sumOfNumbers = 0;
    for (let num of numbers) { // переменная num каждый раз получает следующий аргумент массива
        sumOfNumbers += num;
    }
    return sumOfNumbers;
}

console.log(sum(numbers));





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



//spread операторы и деструктуризация

const numbers = [11, 22, 33, 55, 66];

// const a = numbers[0],
//     b = numbers[1];

const [a, b] = numbers; // деструктурируем массив это присваиваем элементу массива перменную

console.log(a, b); // 11, 22



const numbers = [11, 22, 33, 55, 66];
const [a, b, ...rest] = numbers; // spread оператор это (...) в данном случае он присваивает все оставшие элементы массива к переменной rest (может быть любое слово):
console.log(a, b, rest); // получаем 11 12 [33, 55, 66]

// возможности spread оператора
const numbers = [11, 22, 33, 55, 66];
const [a, b, ...rest] = numbers;
console.log(a, b, rest); // вы ведит 11 22 [ 33, 55, 66 ] 
// чтоб вывести все значения масива без массива от ...rest нужно добавить ... перед spread оператором
console.log(a, b, ...rest); // 11 22 33 55 66
// пример перенести аргумент массива сначала в конец
function swap(arr) {
    const [start, ...rest] = arr; // spead оператор нельзя ставить в середину т.е. const [start, ...rest, b, c, y] = arr; работать не будет 

    return [...rest, start];
}