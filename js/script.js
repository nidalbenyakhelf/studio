const display=document.getElementById('display');
const body=document.getElementById('body');
const clearAll=document.getElementById('clearAll');
const equal=document.getElementById('equal');
let num1=[],num2=[];
let i=0,fr=1;
    let opr;
body.addEventListener('click',(e)=>{
    if(e.target === body || e.target === equal|| e.target === clearAll){
        return
    }
    console.log(e.target)
    if(!isNaN(e.target.dataset.con)){
        if(fr===1){
            num1[i]=e.target.dataset.con;
            display.innerText=num1.join('');
            i++;
        }else if(fr===2){
            num2[i]=e.target.dataset.con;
            display.innerText=num2.join('');
            i++;
        }
    }else{
        if(e.target.class==='c'){
            display.innerText='';
        }
        display.innerText=e.target.dataset.con;
        opr=e.target.dataset.con;
        fr=2;
    }
})

clearAll.addEventListener('click',()=>{
    display.innerText='';
    sid1=0;sid2=0;opr='';
    num1.forEach((e)=>{
      e=0
    })
    num2.forEach((e)=>{
      e=0
    })
})

equal.addEventListener('click',()=>{
    let sid1=Number(num1.join(''));
    let sid2=Number(num2.join(''));
    if(opr==='+'){
        display.innerHTML=sid1+sid2;
    }else if(opr==='-'){
        display.innerHTML=sid1-sid2;
    }
    else if(opr==='x'){
        display.innerHTML=sid1*sid2;
    }
    else if(opr==='/'){
        display.innerHTML=sid1/sid2;
    }
})