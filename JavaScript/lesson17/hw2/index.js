const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    startTimer() {
        if (this.secondsPassed == 60) {
            this.secondsPassed = 0;
            this.minsPassed += 1;
        };
        this.secondsPassed += 5;
        let forStop = setTimeout(() => {
            this.startTimer();
        }, 5000);
    },
    stopTimer() {
        clearTimeout(this.startTimer)
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


// console.log(timer.getTime());

export { timer };