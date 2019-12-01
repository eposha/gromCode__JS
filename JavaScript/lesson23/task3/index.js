const img = document.querySelector('img');

document.addEventListener('DOMContentLoaded', () => {
    console.log(`img ${img.offsetWidth} x ${img.offsetHeight}`);
});

window.addEventListener('load', () => {
    console.log(`img ${img.offsetWidth} x ${img.offsetHeight}`);
});

window.addEventListener('beforeunload', event => {
    event.returnValue = '';
});

window.addEventListener('unload', () => {
    console.log('Page left');
});