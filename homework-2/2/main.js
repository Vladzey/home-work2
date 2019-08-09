function getPrompt(){
    let getNumber = prompt("Введите число",'');
    isInteger(getNumber);
}


function isInteger(number){
   
    if(!isNaN(number)){
        if ((number+"").indexOf(".") > 0) {
            alert("Не целое число");
            getPrompt();
        } else {
            alert("Целое число");
            getPrompt();
        }
    } else{
         alert("Введите число, а не текст");
         getPrompt();
    }
}

getPrompt();