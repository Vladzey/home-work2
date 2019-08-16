/**
 * Очень усложненное решение, слишком много лишнего
 * Это, конечно всё работает, но можно было сделать это всё через пару проверок, например:
 *
 * var answer = +prompt('Введите число');
 *
 * alert((answer % 2 >= 1 || answer === 2) && answer !== 1 ? 'Простое число' : 'Составное число');
 *
 * + проблемы с отступами
 */

function getPrompt() {
  let getNumber = prompt('Введите число', '');

  checkPrimeNumber(getNumber);
}

// Функции должны называться с глагола
function checkPrimeNumber(number) {
  // По хорошему не нужно мутировать параметры, лучше создавать новую переменную
  number = parseInt(number);

  if (!isNaN(parseFloat(number))) {
    let answer = checkIsPrimeNumber(number);

    if (answer) {
      alert('Простое число');
      getPrompt();
    } else {
      alert('Составное число');
      getPrompt();
    }
  } else {
    alert('Введите число');
    getPrompt();
  }
}

function checkIsPrimeNumber(number) {
  if (number === 1) {
    return false;
  }

  for (d = 2; d * d <= number; d++) {
    if (number % d === 0) {
      return false;
    }
  }

  return true;
}

getPrompt();
