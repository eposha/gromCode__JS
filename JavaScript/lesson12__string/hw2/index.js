const cleanTransactionsList = arr => {
    return arr.filter(i => typeof + i === 'number').map(i => '$' + (+i).toFixed(2));
}

// console.log(cleanTransactionsList([' 1.9 ', '16.4', 17, ' 1 dollar ']))