let convert=0;
document.getElementById('currencyInput').addEventListener('input', 
function(e){
    let convert= e.target.value;
    document.getElementById('rublOutput').innerHTML=convert*0.0070;
    document.getElementById('euroOutput').innerHTML=convert*0.0001;
    document.getElementById('dollorOutput').innerHTML=convert*0.0001;
    document.getElementById('yuanOutput').innerHTML=convert*0.0107;
    if(e.target.value<=0){
        alert('kechirasiz nol raqimini kiritib bolmaydi')
    }
});

    
