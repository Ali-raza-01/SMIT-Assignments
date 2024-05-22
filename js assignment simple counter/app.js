var dispay = document.getElementById('counter-display');
 var even_odd = document.getElementById('even-odd');
 var count = 0;

function updateDisplay (){
    dispay.textContent = count;
    even_odd.textContent = count % 2 === 0 ? 'even' : 'odd';

    }
    updateDisplay()


    var btnPlus = document.getElementById('increment')
    btnPlus.addEventListener('click',() =>
        {
            count++;
            if(count >= 0){
                updateDisplay();
            }

    } )
    

    var btnMinus = document.getElementById('decrement');
    btnMinus.addEventListener('click',() => {
        count-- ;
        if(count >= 0 ){
            updateDisplay();
                  
        }else{
            count = 0;
            updateDisplay();
        }
      
    } );
 var btnRest = document.getElementById('reset');
 btnRest.addEventListener('click',() =>{
    count = 0;
    updateDisplay();

 });
    


 
    

 

    

