// Constructor
class Chronometer {
	constructor() {
		this.currentTime = 0;
		this.intervalId = "";
		this.currentMilliseconds = 0;
	}

	startClick() {
		this.intervalId = setInterval(() => this.currentTime++, 1000);
	}

	getMinutes() {
		return Math.floor(this.currentTime / 60);
	}

	getSeconds() {
		const minutes = this.getMinutes();
		const seconds = this.currentTime - minutes * 60;
		return this.twoDigitsNumber(seconds);
	}

	twoDigitsNumber(value) {
		return ("0" + value).slice(-2);
	}

	stopClick() {
		clearInterval(this.intervalId);
	}

	resetClick() {
		this.currentTime = 0;
	}

	splitClick() {
		return `${this.twoDigitsNumber(this.getMinutes())}
      :
      ${this.twoDigitsNumber(this.getSeconds())}
      `;
	}
}
