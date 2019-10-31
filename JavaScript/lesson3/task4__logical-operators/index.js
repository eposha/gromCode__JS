/* оператор || (OR) */
false || true;
false || true || false;
false || false || false;

console.log("false || true: ", false || true);
console.log("false || true || false: ", false || true || false);
console.log("false || false || false: ", false || false || false);

/* оператор && (AND) */
false && true;
false && true && false;
true && true && true;

console.log("false && true: ", false && true);
console.log("false && true && false: ", false && true && false);
console.log("true && true && true: ", true && true && true);



/* Логические операторы могут применятся к любым типам данных */


/* || находит первое истинное значение */
'text' || false;
true || 'text';
undefined || null || 0 || '' || null;

const customAmount = null; // не выводим
const defaultAmount = 17; // не выводим
const amount = customAmount || defaultAmount; // выводим значкние переменной amount в формате console.log('amount: ', amount);


/* && находит первое ложное значение */
'text' && false;
true && 'text';
undefined && null && 0 && '' && null;


/* оператор отрицания (OR) */
!true;
!false;
!'text';
!!'text';