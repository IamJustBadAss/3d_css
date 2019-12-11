let cube = document.getElementById('container');
let button = document.getElementById('rotate-container');
let stop = document.getElementById('stop-container');

let counter = 0;
let x = 1;
let y = 1;
let z = 1;
let deg = 0;
let inc = 1;
let timer = {};

button.addEventListener('click', rotateCube, false);
stop.addEventListener("click", stopCube, false);

function rotateCube() {
    if (counter >= 1) {
        return;
    }
    counter += 1;
    timer.timer = setInterval(function () {
        cube.style.transform = `rotate3d(${x}, ${y}, ${z}, ${deg += inc}deg)`;
    }, 10);
    console.log(timer.timer);
}

function stopCube() {
    counter = 0;
    clearInterval(timer.timer);
}