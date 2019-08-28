//kayak carbon
// function parallax(element, distance, speed) {
//     const item = document.querySelector(element);
//     item.style.transform = `translate(${distance * speed}px)`;
// }
// const parallax1 = document.querySelector('.parallax');

// window.addEventListener('scroll', function () {
//     parallax('h1', window.scrollY, 3);
//     let offset = window.pageYOffset;
//     parallax1.style.backgroundPositionY = offset * 0.7 + "px";
// });

//PARALLAX
const parallax = document.querySelector(".parallax");

window.addEventListener('scroll', function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
});