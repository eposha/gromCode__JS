const checkAvailable = (arr, data) => arr
    .find(obj => {
        return obj.email == data;
    });

const countCommits = arr => arr
    .reduce((acc, nextValue) => {
        const check = checkAvailable(acc, nextValue.commit.author.email);

        if (check == undefined) {
            let obj = {};
            obj.count = 1;
            obj.name = nextValue.commit.author.name;
            obj.email = nextValue.commit.author.email;
            acc.push(obj);
        } else {
            check.count++;
        }
        return acc;
    }, [{}]);

const filterLessActiveDevs = arr => {
    arr.sort((a, b) => b.count - a.count);
    const firstDev = arr[0].count;
    return arr.filter(obj => obj.count == firstDev);
};


const fetchMoreActivities = (startDate, userId, repoId) => {
    return fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
        .then(commits => commits.json())
        .then(data => data.filter(obj => Date.parse(`${obj.commit.author.date}`) > startDate))
        .then(obj => countCommits(obj).splice(1))
        .then(result => filterLessActiveDevs(result));
};

const getDateOfStartCalc = days => new Date().setDate(new Date().getDate() - days);

const getMostActiveDevs = data => {
    const { days, userId, repoId } = data;
    const startDate = getDateOfStartCalc(days);
    return fetchMoreActivities(startDate, userId, repoId)

};

export { getMostActiveDevs };