// ищем инпут1 и инпут2 и записываем в переменную
let numberInput1 = document.getElementById('number1');
let numberInput2 = document.getElementById('number2');

// пишем функцию, которая переводит строку в число и возвращает это число
let getNumberFromInput = function(inputParam) {
   let valueAsNumber = (+inputParam.value);
   return valueAsNumber;
}

// Создаем функцию, которая возвращает объект с двумя введенными числами
let getNumbers = function() {
   let numberValue1 = getNumberFromInput(numberInput1);
   let numberValue2 = getNumberFromInput(numberInput2);
   let result = {
      num1: numberValue1,
      num2: numberValue2
   };
   return result;
}
// функция, которая выполнится при нажатии на оператор
let onOperationButtonClick = function(e) {
   // получаем кнопку, по которой был клик
   let pressedOperationButton = e.target;
   // получаем value этой кнопки
   let operationValue = pressedOperationButton.value;

   let numbersValuesObj = getNumbers();
   let resultValue;

   if(operationValue == '+') {
      resultValue = numbersValuesObj.num1 + numbersValuesObj.num2;
   } else if(operationValue == '-') {
      resultValue = numbersValuesObj.num1 - numbersValuesObj.num2;
   } else if(operationValue == '*') {
      resultValue = numbersValuesObj.num1 * numbersValuesObj.num2;
   } else if(operationValue == '/') {
      resultValue = numbersValuesObj.num1 / numbersValuesObj.num2;
   }
   alert(resultValue);
}

let addOperationListenerForButtonById = function(id){
   let btn = document.getElementById(id);
   btn.onclick = onOperationButtonClick;
}

// let operationButtonsIds = ['plusButton', 'minusButton', 'multiplyButton', 'devideButton'];
let operationButtons = document.querySelectorAll('.operation-button');

for(let i = 0; i < operationButtons.length; i++){
   addOperationListenerForButtonById(operationButtons[i].id);
}
