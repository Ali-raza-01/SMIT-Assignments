var minitue_html = document.getElementById("minitue")
var second_html = document.getElementById("second")
var milisec_html = document.getElementById("milisec")
var start_btn = document.getElementById("start-btn")

var minitue = 0;
var seconds = 0;
var  milisec = 0;

var intervel;



function start (){
    intervel = setInterval(function(){
        milisec++
        if( milisec >= 99){
            seconds++;
            milisec = 0;
        }
        if(seconds >= 59){
            minitue++;
            seconds = 0;
        }
        minitue_html.innerHTML = minitue < 10 ? "0"+ minitue + " :": minitue;
        second_html .innerHTML = seconds < 10 ? "0"+ seconds + " :": seconds;
        milisec_html.innerHTML = milisec ;
        
        start_btn.disabled = true
       
    },10)
}
function stop (){
    clearInterval(intervel);
   start_btn.disabled = false
}
function  reset(){

    clearInterval(intervel);
    minitue  = 0;
    seconds  = 0;
    milisec = 0;

minitue_html.innerHTML = "00 :"; 
second_html .innerHTML = "00 :";
milisec_html.innerHTML = "00 :";
start_btn.disabled = false

    

}
