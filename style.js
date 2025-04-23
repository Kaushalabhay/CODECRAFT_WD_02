let TimerDisplay = document.querySelector('.timer');
let StartButton = document.getElementById('startbtn');
let PauseButton = document.getElementById('pausebtn');
let ResetButton = document.getElementById('resetbtn');
let LapButton = document.getElementById('lapbtn');

let mili = 0;
let secs = 0;
let mins = 0;

let timerID = null;
let isResetAllowed = true;
let isStartAllowed = true;
let isPauseAllowed = true;
let isLapAllowed = true;


StartButton.addEventListener('click', () => {
    if (!isStartAllowed) return;
    isResetAllowed = false ;
    isLapAllowed = true;


    if (timerID !== null) {
    clearInterval(timerID);
    }
    timerID = setInterval(startTimer, 10);


    // ADDING CLASSES
    StartButton.classList.add('classRed');
    ResetButton.classList.add('classRed');

    // REMOVING CLASSES
    PauseButton.classList.remove('classRed');
    LapButton.classList.remove('classRed');

    ResetButton.stopImmediatePropagation();



});

PauseButton.addEventListener('click', () => {
    clearInterval(timerID);

    if (!isPauseAllowed) return;
    isResetAllowed = true ;
    isLapAllowed = false;

    // ADDING CLASSES
    PauseButton.classList.add('classRed');
    LapButton.classList.add('classRed');

    // REMOVING CLASSES
    StartButton.classList.remove('classRed');
    ResetButton.classList.remove('classRed');
});

ResetButton.addEventListener('click', () => {
    if (!isResetAllowed) return;
    isLapAllowed = false;
    isPauseAllowed = false;

clearInterval(timerID);
TimerDisplay.innerHTML = `00 : 00 : 00`;
mili = secs = mins = 0;




// ADDING CLASSES
ResetButton.classList.add('classRed');
PauseButton.classList.add('classRed');
LapButton.classList.add('classRed');

// // REMOVING CLASSES
// PauseButton.classList.remove('classRed');
// LapButton.classList.remove('classRed');

document.getElementById("laps").innerHTML = "";
});

LapButton.addEventListener('click', () => {
    if (!isLapAllowed) return;
    // isResetAllowed = true ;



    const lapTime = TimerDisplay.innerText;
    const li = document.createElement("li");
    li.innerText = `Lap: ${lapTime}`;
    document.getElementById("laps").appendChild(li);


    // ADDING CLASSES
    StartButton.classList.add('classRed');
    ResetButton.classList.add('classRed');
});



function startTimer () {
    mili++;
    if (mili == 100) {
        mili = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
    mins++;
        }
    }

    let miliString = mili < 10 ? `0${mili}` : mili;
    let secString = secs < 10 ? `0${secs}` : secs;
    let minString = mins < 10 ? `0${mins}` : mins;



    TimerDisplay.innerHTML = `${minString} : ${secString} : ${miliString}`;

};


