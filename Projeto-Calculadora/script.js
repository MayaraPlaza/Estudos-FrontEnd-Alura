let currentResult = '0';

function updateResult(value) {
  if (currentResult === '0') {
    currentResult = value;
  } else {
    currentResult += value;
  }
  document.getElementById('result').value = currentResult;
  
  // Chama calculate() automaticamente se um botão de operação foi pressionado
  if (value === '+' || value === '-' || value === '*' || value === '/') {
    calculate();
  }
}

function clearResult() {
  currentResult = '0';
  document.getElementById('result').value = currentResult;
}

function calculate() {
  let result = eval(currentResult);
  document.getElementById('result').value = result;
  currentResult = result.toString();
}

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.getAttribute('data-value');
    switch (buttonValue) {
      case 'clear':
        clearResult();
        break;
      default:
        updateResult(buttonValue);
        break;
    }
  });
});
