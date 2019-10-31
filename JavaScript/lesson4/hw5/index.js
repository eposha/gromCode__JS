let sum = 0,
    remainder,
    division;

for (let i = 1; i <= 1000; i++) {
    sum += i;
};

remainder = sum % 1234;
division = sum / 1234;

console.log(remainder < division);