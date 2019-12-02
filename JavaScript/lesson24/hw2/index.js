const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// const students = [{ name: 'Tom', birthDay: '01/15/2010' }, { name: 'Bob', birthDay: '5/8/2010' }, { name: 'John', birthDay: '01/10/2010' }];

const studentsBirthDays = students => {
    let result = {};

    months.map(arg => {
        result[arg] = [];
    });

    students.sort((a, b) => new Date(a.birthDay).getDate() - new Date(b.birthDay).getDate())
        .map(arg => {
            const monthsName = months[new Date(arg.birthDay).getMonth()];
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