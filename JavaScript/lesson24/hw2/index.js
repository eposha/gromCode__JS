const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// const students = [{ name: 'Tom', birthDay: '01/15/2010' }, { name: 'Bob', birthDay: '5/8/2010' }, { name: 'John', birthDay: '01/10/2010' }];

const studentsBirthDays = students => {
    let result = {};

    students.sort((a, b) => new Date(a.birthDay).getDate() - new Date(b.birthDay).getDate())
        .map(arg => {
            const monthsName = months[new Date(arg.birthDay).getMonth()];
            if (result[monthsName] === undefined) result[monthsName] = [];
            result[monthsName].push(arg.name);
        });

    return result;
};

// console.log(studentsBirthDays(students));

export { studentsBirthDays };