const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    startTimer() {
        if (this.secondsPassed == 60) {
            this.secondsPassed = 0;
            this.minsPassed += 1;
            console.log(this.minsPassed);
        };

        this.secondsPassed += 5;
        console.log(this.secondsPassed);
        setTimeout(() => {
            this.startTimer();
        }, 1000)
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


// timer.getTime();

export { timer };