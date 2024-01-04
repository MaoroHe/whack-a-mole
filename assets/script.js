const main = document.querySelector('main');
let i = 1;
let speedIn = 1100;
let speedOut = 900;

function randomMole() {
    const randomIndex = Math.floor(Math.random()* 12);
    main.children[randomIndex].classList.toggle('lui')

    const click = main.children[randomIndex];

    function removeMole() {
        if (click.classList[1] == 'lui') {
            main.children[randomIndex].classList.toggle('lui');

            const hearts = document.querySelectorAll('.vie');
            const header = document.querySelector('header');

            if (hearts.length > 0) {
                header.lastChild.remove()
            } else {
                alert('perdu');
                window.location.reload();
            }
        }
    }

    if (i == 15) {
        speedIn = 1000;
        speedOut = 800;
    } else if (i == 30) {
        speedIn = 900;
        speedOut = 700;
    } else if (i == 60) {
        speedIn = 750;
        speedOut = 600;
    }


    setTimeout(removeMole, speedOut)

    click.addEventListener('click', (event) => {
        if (click.classList[1] == 'lui') {
            click.classList.remove('lui')
            const p = document.querySelector('#score')
            if(i === 1) {
                const score = document.createTextNode(i);
                p.appendChild(score);
                i++
            } else {
                const score = document.createTextNode(i);
                p.firstChild.remove();
                p.appendChild(score);
                i++
            }
        }
    })
}

const start = document.querySelector('.start');
const stope = document.querySelector('.stop');
const reset = document.querySelector('.reset')
var interval = setInterval(randomMole, speedIn)
clearInterval(interval);

start.addEventListener('click', () => {
    interval = setInterval(randomMole, speedIn)
})

stope.addEventListener('click', () => {
    clearInterval(interval);
})

reset.addEventListener('click', () => {
    window.location.reload()
})