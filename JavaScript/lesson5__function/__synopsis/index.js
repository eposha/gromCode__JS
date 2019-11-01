// -	Локальные переменные в функции не видны снаружи
// -	Глобальные переменные функции видны
// -	В аргументы функции можно передавать значения по умолчанию 

function sayHi(name = 'anonym') {
    console.log(name);
}
sayHi(); //  -- в консоль выведется anonym;
sayHi('John'); // -- в консоль выведется John;



// Return - возвращает результат
function result(a = 0, b = 0) {
    return a + b;
}
console.log(result());


// Arrow function
function getSquare(num) {
    return num * num;
}
const result = getSquare(5);
console.log(result); // --обычные вызов функции


const getSquareArrow = (num) => {
    return num * num;
};

console.log(getSquareArrow); // стрелочная функция