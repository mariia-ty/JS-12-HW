
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timer = document.querySelector(selector);

    this.daysLeft = this.timer.querySelector('[data-value="days"]');
    this.hoursLeft = this.timer.querySelector('[data-value="hours"]');
    this.minsLeft = this.timer.querySelector('[data-value="mins"]');
    this.secsLeft = this.timer.querySelector('[data-value="secs"]');

    this.start();
  }

  start() {
    const intervalId = setInterval(() => this.update(intervalId), 1000);
  }

  update(intervalId) {
    const currentTime = Date.now();
    const time = this.targetDate - currentTime;

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.daysLeft.textContent = days;
    this.hoursLeft.textContent = hours;
    this.minsLeft.textContent = mins;
    this.secsLeft.textContent = secs;

    if (time < 0) {
      clearInterval(intervalId);
    }
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2025"), //had to change year fro 2019
});
