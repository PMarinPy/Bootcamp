const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const resultParagraph = document.getElementById('result');
const word1 = document.getElementById('word1')
const word2 = document.getElementById('word2')
const concatenateButton = document.getElementById('concatenated')
const showConcatenate = document.getElementById('string')

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
function concatenateStrings(){
  concatenateButton.addEventListener('click', () => {
    let word1Value = word1.value;
    let word2Value = word2.value;
    let result = word1Value + ' ' + word2Value;
    string.textContent = `Result: ${result}`
  })
}
calculator()
concatenateStrings()
