const minute=document.getElementById("minute");
const second=document.getElementById("second");

const formMinute=document.getElementById("formMinute");
const formSecond=document.getElementById("formSecond");

const start=document.getElementById("start");
const reset=document.getElementById("reset");

let stop=false;

formMinute.addEventListener("change",()=>{
    minute.textContent=formMinute.value;
});
formSecond.addEventListener("change",()=>{
    second.textContent=formSecond.value<10 ? "0"+formSecond.value :formSecond.value;
});
reset.addEventListener("click",()=>{
    stop=true;
    minute.textContent="00";
    second.textContent="00";
    formMinute.value="00";
    formSecond.value="00";
});
start.addEventListener("click",startTimer);
function startTimer(){
     let mn=minute.textContent; 
     let sn=second.textContent;

     const interval=setInterval(()=>{
         sn--;
         sn=sn<10 ?  "0"+sn: sn;
         
         if(sn=="0-1"){
             mn=mn-1;
             sn=59;

         }
         if((mn==00 && sn==00 ) ||(mn==0 && sn==00)){
             clearInterval(interval);
             window.alert("sure doldu");
             formMinute.value=="00";
             formSecond.value=="00";
         }
         if(stop){
             clearInterval(interval);
             return;
         }
         minute.textContent=mn;
         second.textContent=sn;

     },1000);
};
