class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 100 / 60);

    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = (this.currentTime / 100) % 60;
    return seconds;
  }

  getCentiseconds() {
    // ... your code goes here
    let centiseconds = this.currentTime % 100;
    return centiseconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return String(value).length === 1 ? `0${value}` : String(value);
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    let centiseconds = this.getCentiseconds();

    return `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(
      seconds
    )}:${this.computeTwoDigitNumber(centiseconds)}`;
  }
}
