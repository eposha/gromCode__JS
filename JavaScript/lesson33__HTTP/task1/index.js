const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const defaultAvatar = 'https://avatars3.githubusercontent.com/u1000';


userAvatarElem.src = defaultAvatar;



const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputeElem = document.querySelector('.name-form__input');



const fetchUserData = userName => {
    return fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json());
};

const renderUserData = userData => {
    const { avatar_url, name, location } = userData;
    userAvatarElem.src = avatar_url;
    userNameElem.textContent = name;
    userLocationElem.textContent = location ?
        `from ${location}` :
        '';
};

const onSearchUser = () => {
    const userName = userNameInputeElem.value
    fetchUserData(userName)
        .then(userData => renderUserData(userData));
};

showUserBtnElem.addEventListener('click', onSearchUser);