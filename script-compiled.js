class Stopwatch {
  constructor(display) {
    this.running = false;
    this.display = display;
    this.reset();
    this.print(this.times);
    this.addElement();
  }

  reset() {
    this.times = {
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    };
  }

  print() {
    this.display.innerText = this.format(this.times);
  }

  format(times) {
    var { minutes, seconds, miliseconds } = times;
    return `${pad0(minutes)}:${pad0(seconds)}:${pad0(Math.floor(miliseconds))}`;
  }

  start() {
    if (!this.running) {
      this.running = true;
      this.watch = setInterval(() => this.step(), 10);
    }
  }

  step() {
    if (!this.running) return;
    this.calculate();
    this.print();
  }

  calculate() {
    this.times.miliseconds += 1;
    if (this.times.miliseconds >= 100) {
      this.times.seconds += 1;
      this.times.miliseconds = 0;
    }
    if (this.times.seconds >= 60) {
      this.times.minutes += 1;
      this.times.seconds = 0;
    }
  }

  stop() {
    this.running = false;
    clearInterval(this.watch);
  }

  addElement() {
    const divStopWatch = document.getElementById('controls');

    const startButton = document.createElement("button");
    startButton.innerHTML = '<a href="#" class="button" id="start">Start</a>';

    const stopButton = document.createElement("button");
    stopButton.innerHTML = '<a href="#" class="button" id="stop">Stop</a>';

    const restartButton = document.createElement("button");
    restartButton.innerHTML = '<a href="#" class="button" id="restart">Restart</a>';

    divStopWatch.append(startButton);
    startButton.addEventListener('click', () => stopwatch.start());

    divStopWatch.append(stopButton);
    stopButton.addEventListener('click', () => stopwatch.stop());

    divStopWatch.append(restartButton);
    restartButton.addEventListener('click', () => stopwatch.restart());
  }

  restart() {
    this.stop();
    this.reset();
    this.print();
  }
}

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
    result = '0' + result;
  }
  return result;
}

const stopwatch = new Stopwatch(document.querySelector('.stopwatch'));

/*let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

let restartButton = document.getElementById('restart');
restartButton.addEventListener('click', () => stopwatch.restart());*/
