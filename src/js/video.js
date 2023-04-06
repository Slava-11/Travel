let button = document.querySelector(".footer__background-circle-triangle");
let video = document.querySelector(".footer__background-video");

function onButtonClick(e) {
    button.classList.toggle("active");
    video.classList.toggle("active");
};

button.addEventListener("click", onButtonClick);