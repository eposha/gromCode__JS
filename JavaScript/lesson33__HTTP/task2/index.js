// const userAvatarElem = document.querySelector('.user__avatar');
// const userNameElem = document.querySelector('.user__name');
// const userLocationElem = document.querySelector('.user__location');

// const defaultAvatar = 'https://avatars3.githubusercontent.com/u1000';


// userAvatarElem.src = defaultAvatar;

// const showUserBtnElem = document.querySelector('.name-form__btn');
// const userNameInputeElem = document.querySelector('.name-form__input');



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
    arr.sort((a, b) => a.count > b.count);
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
        // .then(result => filterLessActiveDevs(result))

};

// console.log(getMostActiveDevs({ days: 10, userId: 'eposha', repoId: 'project_calendar' })
//     .then(data => console.log(data)))

export { getMostActiveDevs };

// getMostActiveDevs({ days: 10, userId: 'eposha', repoId: 'project_calendar' })

// showUserBtnElem.addEventListener('click', onSearchUser);






// const fetchUserData = userName => {
//     return fetch(`https://api.github.com/users/${userName}`)
//         .then(response => response.json());
// };

// const renderUserData = userData => {
//     const { avatar_url, name, location } = userData;
//     userAvatarElem.src = avatar_url;
//     userNameElem.textContent = name;
//     userLocationElem.textContent = location ?
//         `from ${location}` :
//         '';
// };

// const onSearchUser = () => {
//     const userName = userNameInputeElem.value
//     fetchUserData(userName)
//         .then(userData => renderUserData(userData));
// };

// showUserBtnElem.addEventListener('click', onSearchUser);