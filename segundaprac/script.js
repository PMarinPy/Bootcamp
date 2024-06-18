let butFru = document.querySelector("#buttonFruits");
let butHygie = document.querySelector("#buttonHygiene");
let butPets = document.querySelector("#buttonPets");
let butCloth = document.querySelector("#buttonClothes");
let butHome = document.querySelector("#buttonHomeAppliances");

let hygieCont = document.querySelector("#hygieneCont");
let petsCont = document.querySelector("#petsCont");
let clothCont = document.querySelector("#clothesCont");
let homeCont = document.querySelector("#homeAppliancesCont");
let fruitCont = document.querySelector(".contItems");


let butts = [butCloth, butFru, butHome, butPets, butHygie];
let conts = [clothCont, fruitCont, homeCont, petsCont, hygieCont,];
 // Corregido a 'hygieCont'
for (let i = 0; i < butts.length; i++) {
    butts[i].addEventListener("click", () => {
        conts[i].style.display = conts[i].style.display === 'none' ? 'block' : 'none';
    });
}
