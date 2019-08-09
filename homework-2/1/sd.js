function getPrompt(){
    let getNumber = prompt("Введите число",'');
    primeNumber(getNumber);
}


function primeNumber(number){
     number = parseInt(number);
     console.log(number, typeof number)
     if(!isNaN(parseFloat(number))){
      let answer = isPrimeNumbr(number);
      if(answer){
          alert("Простое число");
          getPrompt();
      } else{
          alert('Составное число');
          getPrompt();
      }
     } else{
        alert('Введите число');
         getPrompt();
     }
}

function isPrimeNumbr(number){

    if(number==1){
        return false;
    }

    for(d=2; d * d<=number; d++){ 
        if(number % d==0){
            return false;
        }   
    }
    return true;
}

getPrompt();