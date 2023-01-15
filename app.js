let days = document.querySelector('.day')
let hours = document.querySelector('.hour')
let minutes = document.querySelector('.minute')
let seconds = document.querySelector('.second')

let countDownDate = new Date('November 12, 2023 04:20').getTime()

let myFunc = setInterval(function()
{
    let now = new Date().getTime()
    let timeLeft = countDownDate - now
    
    let daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    let hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    days.innerText = daysLeft
    hours.innerText = hoursLeft
    minutes.innerText = minutesLeft
    
    if(secondsLeft<10)seconds.innerText = '0' + secondsLeft 
    else
    {
        seconds.innerText = secondsLeft
    }

    if(minutesLeft<10)minutes.innerText = '0' + minutesLeft 
    else
    {
        minutes.innerText = minutesLeft
    }

    if(hoursLeft<10)hours.innerText = '0' + hoursLeft 
    else
    {
        hours.innerText = hoursLeft
    }

    if(daysLeft<10)days.innerText = '0' + daysLeft 
    else
    {
        days.innerText = daysLeft
    }
},1000)