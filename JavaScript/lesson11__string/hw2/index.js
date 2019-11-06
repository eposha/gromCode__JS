const countOccurrences = (str, substr) => {
    if (substr === '') return null;
    return str.split(substr).length - 1;
}




// const t = 'qwerty qwerty qwerty qwertyuio qwertyuio qasdfghjk sdhsdfh shsfgh hdjhh xghsfh';
// console.log()
// console.log(countOccurrences(t, 'qwerty'));