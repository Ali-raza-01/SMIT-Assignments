setInterval(function(){
    var hours = document.getElementById("hours")
    var minitue = document.getElementById("minitues")
    var second = document.getElementById("seconds")
    var amPm = document.getElementById("amPm")
    var month = document.getElementById("mon")
    
    var hh = document.getElementById("hh")
    var mm = document.getElementById("mm")
    var ss = document.getElementById("ss")
    
    var hr_dot = document.querySelector(".hr_dot");
    var min_dot = document.querySelector(".min_dot");
    var sec_dot = document.querySelector(".ec_dot");
    
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var mon = new Date().toLocaleDateString();
    var am = h >= 12  ? "PM" : "AM";
    
    // convert 24hr to 12hr
    
    if(h > 12){
        h = h - 12 ;
    }
    // add zero before single digit
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    hours.innerHTML = h + "<br><span>hour</span>";
    minitue.innerHTML = m + "<br><span>minitues</span>";
    second.innerHTML = s + "<br><span>seconds</span>";
    amPm.innerHTML = am;
    month.innerHTML = mon ;
    
    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    
    hr_dot.style.transform = `rotate (${h *30}deg)`;
    min_dot.style.transform = `rotate (${m *6}deg)`;
    sec_dot.style.transform = `rotate (${s *6}deg)`;
        
    
    
    
    
    }, 1000 )