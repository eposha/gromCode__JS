import { addImage } from './addImage.js';


const addImageV2 = imgSrc => {
    return new Promise((resolve, reject) => {
        addImage(imgSrc, (err, script) => {
            if (err) reject(err)
            else resolve(script);
        })
    });
};



// const imgSrc = 'https://i.5sfer.com/post/postImage/thumb-8ipwnn.jpg';

// addImageV2(imgSrc).then(data => {
//     console.log(data);
// });
// console.log(addImageV2(imgSrc));
// console.log('Elka');


export { addImageV2 };