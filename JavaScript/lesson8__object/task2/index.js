const concatProps = obj => {
    let arr = [];

    for (let key in obj) {
        arr.push(obj[key]);
    }
    return arr;
}
const object = {
        name: 'Tom',
        age: 17,
    }
    // console.log(concatProps(object));