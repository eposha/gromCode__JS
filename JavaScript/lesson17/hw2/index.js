// const timer = {
//     secondsPassed: 0,
//     minsPassed: 0,
//     startTimer() {
//         let start = true;
//         while (start) {
//             setTimeout(this.secondsPassed += 5, 5000);
//             if (this.secondsPassed.length = 1) {
//                 this.secondsPassed.push(0);
//             }
//         }
//     }
// }


const test = {
    first: 0,
    start() {
        while (true) {
            setTimeout(() => {
                this.first += 5;
                console.log(this.first);
            }, 5000);
        }
    }
};


console.log(test.start());