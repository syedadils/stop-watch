var min = 0;
var sec = 0;
var milsec = 0;

var minheading = document.getElementById('min');
var secheading = document.getElementById('sec');
var milsecheading = document.getElementById('milsec');
var interval;

function timer() {
    milsec++    
    milsecheading.innerHTML = milsec
    if (milsec >= 100) {
        sec++
        secheading.innerHTML = sec
        milsec = 0;
    }

        else if (sec >= 60) {
            min++
            minheading.innerHTML = min
            sec = 0;
        }
    }

    function start() {
        interval = setInterval(timer,10)
        var start = document.getElementById('start').disabled = true;
    }

    function pause() {
        clearInterval(interval)
        var start = document.getElementById('start').disabled = false;
    }

    function reset() {
        min = 0;
        sec = 0;
        milsec = 0;

        minheading.innerHTML = min;
        secheading.innerHTML = sec;
        milsecheading.innerHTML = milsec;

        var start = document.getElementById('start').disabled = false;
        pause();
    }
