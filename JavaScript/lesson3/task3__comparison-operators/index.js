/* сравнение чисел */

const a = 17;
const b = 5;
a > b;
a <= b;
a == b;
a != b;

console.log("'a' > 'b': ", a > b),
    console.log("'a' <= 'b': ", a <= b),
    console.log("'a'== 'b': ", a == b),
    console.log("'a' != 'b': ", a != b);


/* сравнение строк */

'a' < 'b';
'ab' > 'a';

console.log("'a' < 'b': ", 'a' < 'b'),
    console.log("'ab' > 'a': ", 'ab' > 'a');

/* строгое сравнение */

17 === 1;
17 === 17;
17 === '17';
17 === true;
'0' === '';
true === false;
true === true;
null === undefined;
false === 0


/* нестрогое сравнение */

17 == '17';
'0' == '';
0 == '';
null == undefined;
false == 0;


/* осторожно c null и undefined */

undefined == null;
undefined == 0;
null == 0;
undefined < 0;
undefined > 0;