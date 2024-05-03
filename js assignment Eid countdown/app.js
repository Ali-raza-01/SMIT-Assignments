
setInterval(function(){
    var milisecs = document.getElementById("miliSecs")
    var secs = document.getElementById("secs")
    var minitues = document.getElementById("minitue")
    var hours = document.getElementById("hours")
    var days = document.getElementById("days")
    var months = document.getElementById("months")
        
    
    var now = new Date();
    var eid = new Date("6/17/2024");
    var miliseconds = now.getTime();
    var eidSeconds = eid.getTime();
    var remain = eidSeconds - miliseconds;
    
    
    milisecs.innerHTML = remain ; 
    secs.innerHTML = Math.round(remain / 1000);
    minitues.innerHTML = Math.round(remain / 1000 / 60);
    hours.innerHTML =  Math.round(remain / 1000 / 60 / 60);
    days.innerHTML =  Math.round(remain / 1000 / 60 / 60 / 24) ;
    months.innerHTML =  Math.round(remain / 1000 / 60 / 60 / 24 / 30);
    
    },1000 )
    