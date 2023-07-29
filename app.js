
const cardObjectsList = [
    { number: '7',
    icon: `<i class="fa-solid fa-heart"></i>`,
    color: 'red'},

    { number: '7',
    icon: `<i class="fa-solid fa-clover"></i>`,
    color: 'red'},

    { number: '7',
    icon: `<i class="fa-solid fa-diamond"></i>`,
    color: 'red'}

];

const card = document.getElementById('card');
const centerNumber = document.getElementById('number');
const icons = document.getElementsByTagName("span");
  
window.onload = function (){
    centerNumber.innerHTML = '<span> Click to start </span> <i class="fa-solid fa-play"></i>';
    centerNumber.style.fontSize = '2rem';
    centerNumber.style.display = 'flex';
    centerNumber.style.flexDirection = 'column';
    centerNumber.style.gap = '1px'
    centerNumber.style.alignItems = 'center';
}

function createRandomCardNumber() {
    let cardSymbols = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let randomIndex = Math.floor(Math.random() * cardSymbols.length);
    return cardSymbols[randomIndex];
}

function createRandomIconsAmericanCards(){
        let iconsHTML = {
            heart: `<i class="fa-solid fa-heart"></i>`,
            diamond: `<i class="fa-solid fa-diamond"></i>`,
            clover: `<i class="fa-solid fa-clover"></i>`,
            spade: `<i class="fa-solid fa-trash"></i>`
        }
        console.log(Object.keys(iconsHTML).length)
        let randomIndex = Math.floor(Math.random() * Object.keys(iconsHTML).length);
        // return Object.keys(iconsHTML)[randomIndex];
        return iconsHTML[Object.keys(iconsHTML)[randomIndex]];
    }


function assignRandomColor(){
    let colours = ['', 'red'];
    let randomIndex = Math.floor(Math.random() * colours.length);
    return colours[randomIndex];
}


function createNewCard(cardObjectsList){
    const usedCards = [...cardObjectsList];
    const newCard = false;
    const counter = 0;
    // while (!newCard && ){

    // }
    return console.log(usedCards);
}

card.addEventListener('click', function() {
    centerNumber.innerHTML = '';
    centerNumber.style.fontSize = '8rem';
    centerNumber.textContent = createRandomCardNumber();
    const randomIcon = createRandomIconsAmericanCards();
    const selectedColour = assignRandomColor();
    for (const icon of icons) {
    icon.innerHTML = randomIcon;
    icon.style.color = selectedColour ;
    }
});




  
  
  

   

  
