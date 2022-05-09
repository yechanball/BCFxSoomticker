window.onload = function() {
    document.all.loadingioBackground.style.visibility="hidden";
    console.log('Complete page load!');
};

var playNow = 0;

// Play
function playSound(num){
    if(playNow != 0){
        console.log("audio"+playNow+" stop");
        document.getElementById('sound'+playNow).pause();
        document.querySelector('#playbtn'+playNow).style.visibility="visible";
        document.querySelector('#stopbtn'+playNow).style.visibility="hidden";
    }
    playNow = num;
    console.log("audio"+playNow+" play");

    document.querySelector('#playbtn'+num).classList.add('animate__animated', 'animate__pulse', 'animate__slower');

    setTimeout(function () {
        document.querySelector('#playbtn'+num).classList.remove('animate__animated', 'animate__pulse', 'animate__slower');
        document.getElementById('sound'+num).currentTime = 0;
        document.getElementById('sound'+num).play();

        document.querySelector('#playbtn'+num).style.visibility="hidden";
        document.querySelector('#stopbtn'+num).style.visibility="visible";
    }, 600);
}

// Pause
function stopSound(num){
    console.log("audio"+playNow+" stop");
    playNow = 0;

    document.getElementById('sound'+num).pause();
    document.querySelector('#stopbtn'+num).classList.add('animate__animated', 'animate__pulse', 'animate__slower');

    setTimeout(function () {
        document.querySelector('#stopbtn'+num).classList.remove('animate__animated', 'animate__pulse', 'animate__slower');
        document.querySelector('#playbtn'+num).style.visibility="visible";
        document.querySelector('#stopbtn'+num).style.visibility="hidden";
    }, 600);
}

// Audio end
document.getElementById('sound1').addEventListener('ended', function() { 
    console.log("audio1 ended");
    document.querySelector('#playbtn1').style.visibility="visible";
    document.querySelector('#stopbtn1').style.visibility="hidden";
}, false);
document.getElementById('sound2').addEventListener('ended', function() { 
    console.log("audio2 ended");
    document.querySelector('#playbtn2').style.visibility="visible";
    document.querySelector('#stopbtn2').style.visibility="hidden";
}, false);
document.getElementById('sound3').addEventListener('ended', function() { 
    document.querySelector('#playbtn3').style.visibility="visible";
    document.querySelector('#stopbtn3').style.visibility="hidden";
}, false);
document.getElementById('sound4').addEventListener('ended', function() { 
    console.log("audio4 ended");
    document.querySelector('#playbtn4').style.visibility="visible";
    document.querySelector('#stopbtn4').style.visibility="hidden";
}, false);