var min=document.getElementById("min");
var sec=document.getElementById("sec");
var milsec=document.getElementById("milsec");

 milecound=0;
 minte=0;
 second=0;


function timestart(){
    
    stopbut=setInterval(timer,10);
}
function timestop(){
    clearInterval( stopbut);

}
function timereset(){
    clearInterval( stopbut);
     milecound=0;
     minte=0;
     second=0;

     milsec.innerHTML="0"+milecound;
     sec.innerHTML="0"+second;
     min.innerHTML="0"+minte;
    
}



function timer(){
    if(milecound<=9){
        milsec.innerHTML="0"+milecound;
        milecound++;
    }
    else if(milecound<=59) { 
        milsec.innerHTML=milecound;
        milecound++;

    } 
    else if( second<=9){
        milecound=0;
        sec.innerHTML="0"+second;
        second++;

    }
    else if(second<=59) { 
        milecound=0;    
        sec.innerHTML=second;
        second++;
        
    }
    else if( minte<=9){
        second=0;
        minte++;
        min.innerHTML="0"+minte;
        

    }
    else if(minte<=59) { 
        second=0;
        minte++;
        min.innerHTML=minte;
       
        
    }  
} 



