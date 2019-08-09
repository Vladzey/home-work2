function getPrompt(){
    let getNumber = prompt("Введите число",'');
    isInteger(getNumber);
}


function isInteger(number){
    number = parseInt(number);
    if(!isNaN(parseFloat(number))){

    if (number >= 0) {
            alert("Число положительное");
            getPrompt();
        } else {
            alert("Число отрицательное");
            getPrompt();
        }
        
    } else{
         alert("Введите число, а не текст");
         getPrompt();
    }
}


getPrompt();