const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const studentsBirthDays = students => {
    let result = {};

    months.map(arg => {
        result[arg] = [];
    });

    students.sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate())
        .map(arg => {
            const monthsName = months[new Date(arg.birthDate).getMonth()];
            result[monthsName].push(arg.name);
        });

    Object.keys(result).map(arg => {
        if (result[arg].length !== 0) return;

        delete result[arg];
    });


    return result;
};

// console.log(studentsBirthDays(students));

export { studentsBirthDays };