const countOccurrences = (text, find) => {
    if (find === '') return null;

    return text.split(find)
}


const countOccurrences = (str, substr) => {
    if (substr === '') return null;
    return str.split(substr);
}




// const t = 'qwerty qwerty qwerty qwertyuio qwertyuio qasdfghjk sdhsdfh shsfgh hdjhh xghsfh';
// console.log()
// console.log(countOccurrences(t, 'qwerty'));