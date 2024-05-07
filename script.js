console.log ("this file is conneted");


const counterValue = document.getElementById('value');
const increasedBtn= document.getElementById('increased');
const decreasedBtn =document.getElementById('decreased');
const resetBtn = document.getElementById('reset');
const tenCountDisplay =document.getElementById('tencount');


let count = 0;


        //increased the value
        
increasedBtn.addEventListener('click',() => {
        count++;
        decreasedBtn.disabled =false;
        counterValue.textContent =count;
    if (count >= 10){
        tenCountDisplay.textContent = 'YOU HAVE FREE SHIPING';
    }
    if(count >= 20){
        counterValue.style.color ='red';
        tenCountDisplay.textContent ='OUT OF STOCK';
        tenCountDisplay.style.color ='red';
    }
    })


    //decreased the value
    decreasedBtn.addEventListener('click' ,() =>{
        count--;
        if( count===0){
            decreasedBtn.disabled =true;
        }
        counterValue.textContent = count;
        if(count <=9){
            tenCountDisplay.textContent ='';
        }
        else if(count <=19){
            tenCountDisplay.textContent = 'YOU HAVE FREE SHIPING';
            counterValue.style.color ='black';
            tenCountDisplay.style.color='black';
        }
    })
   

        //reset the value

    resetBtn.addEventListener('click',() =>{
        count =0;
        decreasedBtn.disabled =true;
        counterValue.textContent =count;
        if(count == 0){
            tenCountDisplay.textContent ='';
            counterValue.style.color ='black';
        }
    })











    