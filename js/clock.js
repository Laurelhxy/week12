"use strict";
const style=document.createElement("style");
style.innerHTML=`
#clock{
    background-color:yellow;
    margin-bottom:5px;
    display:none;
    border-style: solid;

}`;
document.head.appendChild(style);

function updateTime(){
    let now=new Date();
    let hours=now.getHours();
    if (hours<10){
    hours="0"+hours
   }
else{
    hours=''+hours;
}
let minutes=now.getMinutes();
let minutesToStr
if (minutes<10){
    minutesToStr=`0${minutes}`
}
else{
  minutesToStr=minutes.toString();
}

let seconds=now.getSeconds();
if (seconds<10){
    seconds="0"+seconds
}
else{
    seconds=''+seconds;
}
let currentTime=hours+":"+minutesToStr+":"+seconds;
let myClock=document.getElementById("clock");

myClock.innerHTML=currentTime;
}

function  toggleClock(){
    let myClock=document.getElementById("clock");
    let displaySetting=myClock.style.display;
    let myClockButton=document.getElementById("clockButton");
    if (displaySetting=="block"){
        myClock.style.display="none";
        myClockButton.innerHTML="Show clock";
    }
        else{  
            myClock.style.display="block";
            myClockButton.innerHTML="Hide clock";
        }
}

