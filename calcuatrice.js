 var mode = document.getElementById("mode");
 let body = document.body;
 let container = document.querySelector(".div1");
 let ecran = document.querySelector(".div2");
 let btn = document.querySelectorAll(".btnn");
 let btnn = document.querySelectorAll(".btnnn");
 let modee = document.querySelector(".bx-sun");
   
    mode.onclick = function(){
    body.classList.toggle("body");
    container.classList.toggle("div3");
    ecran.classList.toggle("div4");

    for(let i=0;i<btn.length;i++){
        btn[i].classList.toggle("btns");
    }
    for(let j=0;j<btnn.length;j++){
        btnn[j].classList.toggle("btnns");
    }
}

let touches = [...document.querySelectorAll(".button")];
let listkey = touches.map(touche => touche.dataset.key);
let ecrant = document.querySelector(".ecran");
let resulta = document.querySelector(".ecrant");

document.addEventListener('keydown',(evenement) => {
    const valeur = evenement.key;
    calculer(valeur)
})
 document.addEventListener('click' , (evenement) =>{
     let valeur = evenement.target.dataset.key;
     calculer(valeur);
 })
 function calculer (valeur) {
    if(listkey.includes(valeur)){
     switch(valeur){
         case '80':
            ecrant.textContent="";
            resulta.textContent="";
             break;
         case '13':
             let resultat = eval("textContent");
             resulta.textContent(resultat);
             break;
         case '=':
            resulta.textContent="khhh";
            break;
            
        default:
        let index = listkey.indexOf(valeur);
        let touche = touches[index];
        ecrant.textContent += touche.innerHTML;
        
     }

    }
 }



















//  function calculate(number1,number2,operator){
//     if (!number1 || !number2){
//         return "Invalid number"
//     }
//     if (!['*','-','/','+'].includes(operator)){
//         return "Invalid operator"
//     }
//     switch(operator){
//       case "+":
//         return number1 + number2;
//       case "/":
//         return number1 * number2;
//       case "*":
//         return number1 * number2;
//       case "-":
//         return number1 - number2;
//      }
//     }






