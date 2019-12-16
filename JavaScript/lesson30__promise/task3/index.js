import { addImage } from './addImage.js';

const addImageV2 = imgSrc => {

    return new Promise((resolve, reject) => {
        const imageElem = addImage(imgSrc);
        const containerElem = document.querySelector('.page');
        containerElem.append(imageElem);

        const imgLoaded = () => {
            const { width, height } = imageElem;
            resolve({ width, height });
        };
        const imgNotLoaded = () => {
            reject('Image load failed');
        };
        imageElem.addEventListener('load', imgLoaded);
        imageElem.addEventListener('error', imgNotLoaded);
    });
};



// const imgSrc = 'https://i.5sfer.com/post/postImage/thumb-8ipwnn.jpg';

// addImageV2(imgSrc).catch(data => {
//     console.log(data);
// });
// console.log(addImageV2(imgSrc));
// console.log('Elka');


export { addImageV2 };