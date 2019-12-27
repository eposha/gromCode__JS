import { fetchUserData, fetchRepositories } from './gatways.js';
import { renderUserData } from './user.js';
import { renderRepos, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';

const defaultUser = {
    avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    name: '',
    location: '',
};

renderUserData(defaultUser);


const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputeElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
    showSpinner();
    cleanReposList();
    const userName = userNameInputeElem.value
    fetchUserData(userName)
        .then(userData => {
            renderUserData(userData);
            return userData.repos_url;
        })
        .then(url => fetchRepositories(url))
        .then(reposList => {
            renderRepos(reposList);
            hideSpinner();
        })
        .catch(err => {
            hideSpinner();
            alert('Failed to load data');
        })
};

showUserBtnElem.addEventListener('click', onSearchUser);