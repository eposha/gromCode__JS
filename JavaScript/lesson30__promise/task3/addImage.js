const addImageV2 = (imgSrc) => {
    const addImage = imgSrc => {
        const p = new Promise((resolve, reject) => {
            const imgElem = document.createElement('img');
            imgElem.setAttribute('alt', 'My Photo');
            imgElem.src = imgSrc;
            const containerElem = document.querySelector('.page');
            containerElem.append(imgElem);

            const imgLoaded = () => {
                const { width, height } = imgElem;
                resolve({ width, height });
            };

            const imgNotLoaded = () => {
                reject('Image load failed');
            };

            imgElem.addEventListener('load', imgLoaded);
            imgElem.addEventListener('error', imgNotLoaded);
        });
        return p;
    };

    return addImage(imgSrc);
}

export { addImageV2 };




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