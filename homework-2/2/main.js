/**
 * Тоже усложненное решение, можно было сделать на подобии такого:
 *
 * var answer = +prompt('Введите число');
 *
 * alert(answer % 2 === 0 || answer === 1 ? 'Целое число' : 'Не целое число');
 */

function getPrompt() {
  let getNumber = prompt('Введите число', '');

  checkIsInteger(getNumber);
}

function checkIsInteger(number) {
  if (!Number.isNaN(number)) {
    if ((String(number)).indexOf('.') > 0) {
      alert('Не целое число');
      getPrompt();
    } else {
      alert('Целое число');
      getPrompt();
    }
  } else {
    alert('Введите число, а не текст');
    getPrompt();
  }
}

getPrompt();
