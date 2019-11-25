const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    stopTimer: 0,
    startTimer() {
        this.stopTimer = setInterval(() => {
            this.secondsPassed += 5
            if (this.secondsPassed === 60) {
                this.minsPassed += 1;
                this.secondsPassed = 0;
            }
        }, 5000);
    },
    stopTimer() {
        clearInterval(this.stopTimer);
    },
    getTime() {
        return `${this.minsPassed}:${this.secondsPassed < 10 ? '0' + this.secondsPassed : this.secondsPassed}`;
    },
    resetTimer() {
        this.minsPassed = 0;
        this.secondsPassed = 0;
    },
}

export { timer };