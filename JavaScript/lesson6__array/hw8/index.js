const numbers = [5, 6, 55, 78, 30, 85];

function cloneArr(arr) {
    const [...newArr] = arr;

    newArr[2] = 'Tom';
    console.log(arr);
    console.log(newArr);
}

console.log(cloneArr(numbers));