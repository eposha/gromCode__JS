const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const { width, height } = imgElem;

    const notLoaded = 'Image load failed';

    imgElem.addEventListener('load', callback(null, { width, height }));
    imgElem.addEventListener('error', callback(new Error(notLoaded)));

};

export { addImage };




// const addImage = imgSrc => {
//     const p = new Promise((resolve, reject) => {
//         const imgElem = document.createElement('img');
//         imgElem.setAttribute('alt', 'My Photo');
//         imgElem.src = imgSrc;
//         const containerElem = document.querySelector('.page');
//         containerElem.append(imgElem);

//         const imgLoaded = () => {
//             const { width, height } = imgElem;
//             // resolve('good job');
//             resolve({ width, height });
//         };

//         const imgNotLoaded = () => {
//             reject('Image load failed');
//         };

//         imgElem.addEventListener('load', imgLoaded);
//         imgElem.addEventListener('error', imgNotLoaded);
//     });
//     return p;
// };

// export { addImage };




// const addSizeImg = imgSrc => {
//     const p = new Promise((resolve, reject) => {
//         const imgElem = document.createElement('img');
//         imgElem.setAttribute('alt', 'My Photo');
//         imgElem.src = imgSrc;
//         const containerElem = document.querySelector('.page');
//         containerElem.append(imgElem);

//         const imgLoaded = () => {
//             const { width, height } = imgElem;
//             resolve({ width, height });
//         };

//         const imgNotLoaded = () => {
//             reject('Image load failed');
//         };

//         imgElem.addEventListener('load', imgLoaded);
//         imgElem.addEventListener('error', imgNotLoaded);
//     });

//     return p;
// };

// // const imgSrc = 'https://i.5sfer.com/post/postImage/thumb-8ipwnn.jpg';


// const addImage = imgSrc => {
//     return addSizeImg(imgSrc);
// };