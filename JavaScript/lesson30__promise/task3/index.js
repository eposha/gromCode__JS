import { addImage } from './addImage.js';

const addImageV2 = imgSrc => {
    // const resultPomise = addImage(imgSrc);
    addImage(imgSrc).then((data) => {
        console.log(data);
    });

    addImage(imgSrc).catch((data) => {
        console.log(data);
    });
};

// const imgSrc = 'https://i.5sfer.com/post/postImage/thumb-8ipwnn.jpg';

// addImageV2(imgSrc);
// console.log(addImageV2(imgSrc));
// console.log('Elka');


export { addImageV2 };