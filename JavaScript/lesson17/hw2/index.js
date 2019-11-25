const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    timerId: 0,
    startTimer() {
        this.timerId = setTimeout(function tick() {
            this.secondsPassed += 5;
            if (this.secondsPassed === 60) {
                this.minsPassed += 1;
                this.secondsPassed = 0;
            }
            timerId = setTimeout(tick, 5000);
        }, 5000);
    },
    timerId() {
        clearInterval(this.timerId);
    },
    getTime() {
        let checkLength = this.secondsPassed < 10 ? '0' + this.secondsPassed : this.secondsPassedl
        return `${this.minsPassed}:${checkLength}`;
    },
    resetTimer() {
        this.minsPassed = 0;
        this.secondsPassed = 0;
    },
}

export { timer };