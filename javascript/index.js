let chronometer = new Chronometer();
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits')

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

function printSplit() {
  let splitText = printTime();

  let liElement = document.createElement('li');
  
  liElement.innerHTML = splitText;

  splits.appendChild(liElement);
}

function clearSplits() {
  splits.innerHTML = '';
}

function setStopBtn() {
	btnLeft.classList.toggle("start");
	btnLeft.classList.toggle("stop");
	btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
	btnRight.classList.toggle("reset");
	btnRight.classList.toggle("split");
	btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
	btnLeft.classList.toggle("start");
	btnLeft.classList.toggle("stop");
	btnLeft.innerHTML = "START";
}

function setResetBtn() {
	btnRight.classList.toggle("reset");
	btnRight.classList.toggle("split");
	btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
  if (btnLeft.className.includes('start')) {
    chronometer.startClick();
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
  if (btnRight.className.includes('reset')) {
    chronometer.resetClick();
  } else {
    chronometer.splitClick();
  }
});