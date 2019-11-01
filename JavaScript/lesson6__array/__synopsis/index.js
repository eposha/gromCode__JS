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