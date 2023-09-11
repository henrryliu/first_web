let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('span');
let value =document.getElementById('value');
let i=0;
function cal(){
    if(i==true){
        value.innerHTML="";
        i=false;
    }
    switch(this.innerHTML){
        case "=":
            value.innerHTML = eval(value.innerHTML);
            i=true;
            break;
        case "clear":
            value.innerHTML = "";
            break;
        default:
            value.innerHTML += this.innerHTML;
    }
}

for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',cal);
}