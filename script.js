// добавляем в инпут значения
let operationInput = document.querySelector('.operation-input');
function insert(value){
   operationInput.value += value;
}
// получаем коллекцию элементов с классом value
let values = document.querySelectorAll('.value');
// добавляем событие клик на каждый элемент коллекции 
for(let i = 0; i < values.length; i++){
   // при клике на элемент срабатывает функция insert
   values[i].onclick = function(){
      insert(values[i].textContent);
   };
}
// очищаем инпут
function clean() {
   operationInput.value = '';
}
// находим кнопку clean
let cleanBtn = document.querySelector('.clean');
// при клике на кнопку срабатывает функция clean
cleanBtn.onclick = clean;
// удаляем введенные символы с конца
let backspaceBtn = document.querySelector('.backspace');
function backspace(){
   // преобразуем значение из инпута в массив
  let valueArr = operationInput.value.split('');
   // отнимаем последний элемент массива   
  valueArr.pop();
  operationInput.value = valueArr.join('');
}
backspaceBtn.onclick = backspace;
// вычисляем результат
let equalBtn = document.querySelector('.equal');
let equal = function(){
   if(operationInput){
      operationInput.value = eval(operationInput.value);
   }
}
equalBtn.onclick = equal;


// // ищем инпут1 и инпут2 и записываем в переменную
// let numberInput1 = document.getElementById('number1');
// let numberInput2 = document.getElementById('number2');

// // пишем функцию, которая переводит строку в число и возвращает это число
// let getNumberFromInput = function(inputParam) {
//    let valueAsNumber = (+inputParam.value);
//    return valueAsNumber;
// }

// // Создаем функцию, которая возвращает объект с двумя введенными числами
// let getNumbers = function() {
//    let numberValue1 = getNumberFromInput(numberInput1);
//    let numberValue2 = getNumberFromInput(numberInput2);
//    let result = {
//       num1: numberValue1,
//       num2: numberValue2
//    };
//    return result;
// }
// // функция, которая выполнится при нажатии на оператор
// let onOperationButtonClick = function(e) {
//    // получаем кнопку, по которой был клик
//    let pressedOperationButton = e.target;
//    // получаем value этой кнопки
//    let operationValue = pressedOperationButton.value;

//    let numbersValuesObj = getNumbers();
//    let resultValue;

//    if(operationValue == '+') {
//       resultValue = numbersValuesObj.num1 + numbersValuesObj.num2;
//    } else if(operationValue == '-') {
//       resultValue = numbersValuesObj.num1 - numbersValuesObj.num2;
//    } else if(operationValue == '*') {
//       resultValue = numbersValuesObj.num1 * numbersValuesObj.num2;
//    } else if(operationValue == '/') {
//       resultValue = numbersValuesObj.num1 / numbersValuesObj.num2;
//    }
//    alert(resultValue);
// }

// let addOperationListenerForButtonById = function(id){
//    let btn = document.getElementById(id);
//    btn.onclick = onOperationButtonClick;
// }

// // let operationButtonsIds = ['plusButton', 'minusButton', 'multiplyButton', 'devideButton'];
// let operationButtons = document.querySelectorAll('.operation-button');

// for(let i = 0; i < operationButtons.length; i++){
//    addOperationListenerForButtonById(operationButtons[i].id);
// }

// // выводим цифры на экран при нажатии
// let onNumberButtonClick = function(e){
//    let operationInput = document.querySelector('.operation-input');
//    let pressedNumber = e.target;
//    let numberValue = pressedNumber.value;
//    operationInput.value += numberValue;
// }