import { addImage } from './addImage.js';

const addImageV2 = imgSrc => {
    return addImage(imgSrc);
};



// const imgSrc = 'https://i.5sfer.com/post/postImage/thumb-8ipwnn.jp';

// addImageV2(imgSrc).catch(data => {
//     console.log(data);
// });
// console.log(addImageV2(imgSrc));
// console.log('Elka');


export { addImageV2 };