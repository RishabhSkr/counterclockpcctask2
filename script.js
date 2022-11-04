function realtimeClock() {


    var rtClock = new Date();
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();
    var Cdate = rtClock.getDate();
    var Cmonth = rtClock.getMonth();
    var Cyear = rtClock.getFullYear();


    // Add AM and PM system
    var amPm = hours < 12 ? "AM" : "PM";
    // Convert the hours component to 12-hour format
    hours = hours > 12 ? hours - 12 : hours;
    // Pad the hours, minutes and seconds with leading zeros
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
    // Display the clock
    document.getElementById("date").innerHTML =
        Cdate + "/" + Cmonth +"/"+Cyear;  
    document.getElementById("clock").innerHTML =
         hours + ":" + minutes + ":" + seconds + " " + amPm;
    var t = setTimeout(realtimeClock, 500);
}

let count = 1;

function counter() {
    count++;
    updateCount();
    updateColor();
}

function updateCount() {
    document.getElementById("count").innerHTML = count;
}

function updateColor() {
    if (count % 2 === 0)
        document.getElementById("clock").style.color = "green";
    else
        document.getElementById("clock").style.color = "red";
}