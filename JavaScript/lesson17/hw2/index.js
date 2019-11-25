let timer = {
    secondsPassed: 0,
    minsPassed: 0,
    timerID: 0,
    startTimer() {
        this.timerID = setInterval(() => {
            this.secondsPassed += 5
            if (this.secondsPassed === 60) {
                this.secondsPassed = 0;
                this.minsPassed++
            }
        }, 5000);

    },
    stopTimer() {
        clearInterval(this.timerID)
    },
    getTime() {
        return `${this.minsPassed}:${this.secondsPassed < 10 ? '0' + this.secondsPassed : this.secondsPassed}`;
    },
    resetTimer() {
        this.secondsPassed = 0;
        this.minsPassed = 0;
    }
}

export { timer }