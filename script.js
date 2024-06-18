const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const resultParagraph = document.getElementById('result');

function calculator(){
    addButton.addEventListener('click', () => {
        let num1 = parseFloat(num1Input.value);
        let num2 = parseFloat(num2Input.value);
        let result = num1 + num2;
        resultParagraph.textContent = `Result: ${result}`;
      });
      
      subtractButton.addEventListener('click', () => {
        let num1 = parseFloat(num1Input.value);
        let num2 = parseFloat(num2Input.value);
        let result = num1 - num2;
        resultParagraph.textContent = `Result: ${result}`;
      });
      
      multiplyButton.addEventListener('click', () => {
        let num1 = parseFloat(num1Input.value);
        let num2 = parseFloat(num2Input.value);
        let result = num1 * num2;
        resultParagraph.textContent = `Result: ${result}`;
      });
      
      divideButton.addEventListener('click', () => {
        let num1 = parseFloat(num1Input.value);
        let num2 = parseFloat(num2Input.value);
        if (num2 === 0) {
          resultParagraph.textContent = 'mamahuevo';
        } else {
            let result = num1 / num2;
          resultParagraph.textContent = `Result: ${result}`;
        }
      });
}
calculator()
