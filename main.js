let cube = document.getElementById('container');
let button = document.getElementById('rotate-container');
let stop = document.getElementById('stop-container');

let x = 1;
let y = 1;
let z = 1;
let deg = 0;
let inc = 1;
let timer = {};

button.addEventListener('click', rotateCube, false);
stop.addEventListener("click", stopCube, false);

function rotateCube() {
    timer.timer = setInterval(function () {
        cube.style.transform = `rotate3d(${x}, ${y}, ${z}, ${deg += inc}deg)`;
    }, 10);
}

function stopCube() {
    clearInterval(timer.timer);
}