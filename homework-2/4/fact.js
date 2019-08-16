function getPrompt() {
  let getNumber = prompt('Введите число', '');

  isPositiveNumber(getNumber);
}

function isPositiveNumber(number) {
  if (!Number.isNaN((number))) {
    if (number >= 0) {
      isInteger(number);
    } else {
      alert('Число отрицательное');
      getPrompt();
    }
  } else {
    alert('Введите число, а не текст');
    getPrompt();
  }
}

function isInteger(number) {
  if ((String(number)).indexOf('.') > 0) {
    alert('Не целое число');
    getPrompt();
  } else {
    factorialOfNumber(number);
  }
}

function factorialOfNumber(number) {
  number = Number(number);

  let factorial = 1;
  let arrayOfNumber = [];

  if (number <= 12) {
    for (let i = 1; i < number + 1; i++) {
      arrayOfNumber.push(i);
    }

    for (let i = 0; i < arrayOfNumber.length; i++) {
      factorial *= arrayOfNumber[i];
    }

    alert('Факториал числа ' + number + ' равен ' + factorial);
  } else if(number == 0){
    alert('Факториал числа ' + number + ' равен ' + factorial);
  } else {
    alert('Число слишком велико');
  }

  getPrompt();
}

getPrompt();
