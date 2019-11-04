const getMessagesForBestStudents = (allStudents, failedStudents) => {
    const passedStudent = allStudents
        .filter(name => !failedStudents.includes(name));

    const messages = passedStudent
        .map(name => 'Good job, ' + name);

    return messages;
};