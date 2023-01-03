
const daysEl= document.getElementById('days');
const hoursEl= document.getElementById('hours');
const secondsEl= document.getElementById('seconds');
const minutesEl= document.getElementById('mins');


const graduation="15 July 2023";

function countdown(){
    const graduationDate = new Date(graduation);
    const currentDate= new Date();

    const totalSeconds=(graduationDate- currentDate) /1000;
    const mins= Math.floor(totalSeconds/60)%60;
    const hours= Math.floor(totalSeconds/3600)%24;
    const days = Math.floor (totalSeconds/3600/24);
    const seconds= Math.floor (totalSeconds)% 60;


    daysEl.innerHTML= days;
    hoursEl.innerHTML= hours;
    minutesEl.innerHTML= mins;
    secondsEl.innerHTML= seconds;


}

//initial call

countdown();

setInterval(countdown, 1000);
