const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    startTimer(check = true) {
        if (check == true) {
            if (this.secondsPassed == 60) {
                this.secondsPassed = 0;
                this.minsPassed += 1;
            };
            this.secondsPassed += 5;
            console.log(this.secondsPassed);
            setTimeout(() => {
                this.startTimer();
            }, 5000);
        };
    },
    stopTimer() {
        this.startTimer(false)
    },
    getTime() {
        let checkLength = this.secondsPassed < 10 ? '0' + this.secondsPassed : this.secondsPassed;
        return `${this.minsPassed}:${checkLength}`;
    },
    resetTimer() {
        this.minsPassed = 0;
        this.secondsPassed = 0;
    },
};


// console.log(timer.startTimer());

// setTimeout(() => {
//     timer.stopTimer();
// }, 10000);

// setTimeout(() => {
//     console.log(timer.getTime());
// }, 20000);



export { timer };