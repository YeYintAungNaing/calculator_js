const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equal = document.getElementById('equal');
const decimal = document.getElementById('decimal');
const clear = document.getElementById('clear');
const deleteChar = document.getElementById('delete');


let numDisplay = document.getElementById('display');



clear.onclick= () => {numDisplay.textContent = "";}
one.onclick= () => {numDisplay.textContent += '1';}
two.onclick= () => {numDisplay.textContent += '2';}
three.onclick= () => {numDisplay.textContent += '3';}
four.onclick= () => {numDisplay.textContent += '4';}
five.onclick= () => {numDisplay.textContent += '5';}
six.onclick= () => {numDisplay.textContent += '6';}
seven.onclick= () => {numDisplay.textContent += '7';}
eight.onclick= () => {numDisplay.textContent += '8';}
nine.onclick= () => {numDisplay.textContent += '9';}
zero.onclick= () => {numDisplay.textContent += '0';}
plus.onclick= () => {numDisplay.textContent += '+';}
minus.onclick= () => {numDisplay.textContent += '-';}
multiply.onclick= () => {numDisplay.textContent += '*';}
divide.onclick= () => {numDisplay.textContent += '/';}



equal.onclick= () => {
   let result = eval(numDisplay.textContent);
   numDisplay.textContent = result;
   console.log(result) 
}


deleteChar.onclick= () => {
   let lastIndex = numDisplay.textContent.length - 1;
   numDisplay.textContent = numDisplay.textContent.slice(0, lastIndex)
}