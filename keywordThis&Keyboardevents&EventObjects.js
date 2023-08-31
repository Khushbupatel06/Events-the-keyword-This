
const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const btns = document.querySelectorAll('button');

for(let button of btns) {
    button.addEventListener('click', function () {
        button.style.backgroundColor = makeRandomColor();
        button.style.color = makeRandomColor();
    })
}

const h1s = document.querySelectorAll('h1');

for(let h1 of h1s) {
    h1.addEventListener('click', function () {
        h1.style.backgroundColor = makeRandomColor();
        h1.style.color = makeRandomColor();
    })
}

// ============================
//         KEYWORD THIS
// ============================

const btns = document.querySelectorAll('button');

for(let button of btns) {
    button.addEventListener('click', function () {
        this.style.backgroundColor = makeRandomColor();
        this.style.color = makeRandomColor();
    })
}

const h1s = document.querySelectorAll('h1');

for(let h1 of h1s) {
    h1.addEventListener('click', function () {
        this.style.backgroundColor = makeRandomColor();
        this.style.color = makeRandomColor();
    })
}

const btns = document.querySelectorAll('button');

for(let button of btns) {
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1');

for(let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}

// ==================================
//     EVENT OBJECT
// ==================================    

document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
})

const input = document.querySelector('input');
input.addEventListener('keydown', function (e) {
    console.log(e.key);
    console.log(e.code);
})

input.addEventListener('keyup', function() {
    console.log("KEYUP");
})

window.addEventListener('keydown', function(e){
    switch(e.code){
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowRight':
            console.log("RIGHTARROW!");
            break;
        case 'ArrowLeft':
            console.log("LEFTARROW!");
            break;
        default:
            console.log("IGNORED!");
    }
})