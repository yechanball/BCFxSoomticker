const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var code =urlParams.get('code');

window.onload = function() {
    setTimeout(function() {
        const element = document.querySelector('.animation-element');
        document.all.logoArea.style.visibility="visible";
        element.classList.add('animate__animated', 'animate__fadeIn', 'animate__slow');

        element.addEventListener('animationend', () => {
            location.href='./main.html?code='+code;
        });
    }, 1000);
};