// mode night & mode light
 var mode = document.getElementById("mode");
 let body = document.body;
let containerCalcule = document.querySelector(".containerDark");
 let ecran = document.querySelector(".ecranDark");
 let btnOPeration = document.querySelectorAll(".btnOPerationDark");
 let btnNumber = document.querySelectorAll(".btnNumberDark");
 let moon = document.querySelector(".bx-moon");
 let sun = document.querySelector(".bx-sun");
    mode.onclick = function(){
    body.classList.toggle("body");
        containerCalcule.classList.toggle("containerLight");
    ecran.classList.toggle("ecranLight");
    moon.classList.toggle("display");
    sun.classList.toggle("display");
    for(let i=0 ; i<btnOPeration.length ; i++){
        btnOPeration[i].classList.toggle("btnOperationLight");
    }
    for(let j=0 ; j<btnNumber.length ; j++){
        btnNumber[j].classList.toggle("btnNumberLight");
    }
}
// variable pour affiche operation et resultat
const screen = document.querySelector("#screen");
const results = document.querySelector("#result");
// les variable pour stocker mes numbers and operator 
let precedent = 0;
let affiche = 0;
let operator = null;

document.addEventListener('keydown' , (event) =>{
    let value = event.keyCode;
    console.log(value);
  })
// gere les button de calculatrice
    let touches = document.querySelectorAll("button");
    for (let touche of touches){
        touche.addEventListener("click",gereTouche);
    }
function gereTouche(){
 let touche = this.innerText;
    screen.textContent+=touche;
    if(affiche === 0){
        switch (touche){
            case '+' :
                screen.textContent = "";
                break;
            case '%':
                screen.textContent = "";
                break;
            case '÷':
                screen.textContent = "";
                break;
            case '×':
                screen.textContent = "";
                break;
            case '.':
                screen.textContent = "";
                break;
            case '=':
                screen.textContent = "";
                break;
            case '-':
                screen.textContent = "-";
                break;    
        }
    }
    if (parseFloat(touche) >= 0 || touche == '.') {
        if (touche == '.') {
            if (affiche.includes('.') == true) {
                screen.textContent = screen.textContent.slice(0, -1);
            }
        }
        if (affiche == 0) {
            affiche = touche.toString();
        } else {
            affiche += touche.toString();
    }
}else{
    switch(touche){
        case "CE":
            screen.textContent = screen.textContent.slice(0,-3); 
            break;    
        case 'AC':
            precedent = 0;
            affiche = 0;
            operator = null;
            screen.textContent = "";
            results.textContent = '= ' + 0;
            break;
        case '.':

            break;
        case "+" :
        case "-" :
        case "×" :
        case "÷" :
        case "%" :
        case "^" :
            precedent = (precedent === 0) ? affiche : 
                operate(parseFloat(precedent), parseFloat(affiche), operator);
                    operator = touche;
            affiche = 0;
            break; 
        case "=" :
            if (screen.textContent.includes('=') === true) {
                screen.textContent = screen.textContent.slice(0, -1);
            }
            precedent = operate(precedent, affiche, operator);
            results.textContent = '= ' + precedent;
            break;    
    }
}
}
// function pour fair les operation mathematique
function operate(number1,number2,operation){
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    if (operation == '+'){
        return number1+number2;
    } 
    if (operation == '-'){
        return number1-number2;
    } 
    if (operation == '×'){
        return number1*number2;
    } 
    if (operation == '÷'){
        if (number2 == 0) {
            return results.textContent = "error math";
        }
        return number1 / number2;
    }
    if (operation == '%'){
        return number1%number2;
    } 
    if (operation == '^'){
        return Math.pow(number1,number2);
    }  
}