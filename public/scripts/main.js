/* RFER TO in-view.js */

//grad headers
//insert content of header in the sticky one

const header = document.querySelector('.header')
const desktopHeader = document.querySelector('.header-desktop')

desktopHeader.innerHTML = header.innerHTML;

inView('.header')
    //when header enter viewport hide the desktop header
    .on('enter', el => {
        desktopHeader.classList.remove('visible')
    })
    //when the header leave show it
    .on('exit', el => {
        desktopHeader.classList.add('visible')
    });

inView('.fade')
    //when header enter viewport hide the desktop header
    .on('enter', img => {
        img.classList.add('visible')
    })
    //when the header leave show it
    .on('exit', img => {
        img.classList.remove('visible')
    });



/* RFER TO tilt.js */

const images = document.querySelectorAll(".image");
VanillaTilt.init(images, {
    max: 25,
    speed: 400
});

const registerBtn = document.querySelector('.register-button')
registerBtn.addEventListener('click', event => {
    event.preventDefault()
    const frontEl = document.querySelector('.front')
    frontEl.classList.add('slide-up')
})
