const fruitBut = document.querySelector('#buttonFruits')
const fruitCont = document.getElementById('fruitsCont')

fruitBut.addEventListener('click', () => {
    fruitCont.style.display = fruitCont.style.display == 'none' ? 'block' : 'none';
});
