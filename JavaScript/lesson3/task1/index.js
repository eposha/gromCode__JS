// Унарный плюс приводит операнд к числу
+17 + '77';


// Бинарный плюс складывает строки или прибавляет числа
10 + '5';
'some' + 'text';

// Математические операции с undefined возвращают NaN
undefined + 1;
null + 8;
undefined + '5';
7 - null;
5 - undefined;
'text' + null;
let num = 17;

// Постфиксная и префиксная форма записи
++num;
num++;


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

console.log(+17 + '77', 10 + '5', 'some' + 'text', undefined + 1, null + 8, undefined + '5', 7 - null, 5 - undefined, 'text' + null, ++num, num++, '24' / 4, 18 * '3', '9' - '3', 'seventeen' / 3, 4 * 'four', 17 / 0, 10 + 'seven', undefined + 1, null + 8, undefined + '5',
    'text' + null)