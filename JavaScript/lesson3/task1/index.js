// Унарный плюс приводит операнд к числу
+17; +
'77';

console.log('+17: ', +17),
    console.log("+'77': ", +'77');

// Бинарный плюс складывает строки или прибавляет числа
10 + '5';
'some' + 'text';

console.log("10 + '5': ", 10 + '5'),
    console.log("'some' + 'text': ", 'some' + 'text');


// Математические операции с undefined возвращают NaN
undefined + 1;
null + 8;
undefined + '5';
7 - null;
5 - undefined;
'text' + null;
console.log('undefined + 1: ', undefined + 1),
    console.log('null + 8: ', null + 8),
    console.log("undefined + '5': ", undefined + '5'),
    console.log('7 - null: ', 7 - null),
    console.log('5 - undefined: ', 5 - undefined),
    console.log("'text' + null: ", 'text' + null);
let num = 17;



// Постфиксная и префиксная форма записи
++num;
num++;

console.log('++num: ', ++num),
    console.log('num++', num++);


// математические операторы приводят операнды к числам
const a = 17;
const b = -a;
'24' / 4;
18 * '3';
'9' - '3';
'seventeen' / 3;
4 * 'four';
17 / 0;

10 + 'seven';
undefined + 1;
null + 8;
undefined + '5';
'text' + null;