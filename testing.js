
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
if (Array.isArray(cardObjectsList)) {
    const usedCards = [...cardObjectsList];
    // Rest of your code here...
  } else {
    console.error('cardObjectsList is not an array.');
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
        // console.log(Object.keys(iconsHTML).length)
        let randomIndex = Math.floor(Math.random() * Object.keys(iconsHTML).length);
        // return Object.keys(iconsHTML)[randomIndex];
        return iconsHTML[Object.keys(iconsHTML)[randomIndex]];
    }


function assignRandomColor(){
    let colours = ['', 'red'];
    let randomIndex = Math.floor(Math.random() * colours.length);
    return colours[randomIndex];
}


// function createNewCard(pepito = cardObjectsList){
//     const usedCards = [...pepito];
const cardObject = { number: '7',
                    icon: `<i class="fa-solid fa-heart"></i>`,
                    color: 'red'}
// function checkIfCardAlreadyExits(card = cardObject, pepito = cardObjectsList){
function checkIfCardAlreadyExits(card, array){
    const pepito = array;
    const exampleCard = card;
    const newCard = false;
    const combinations = 0; // I can have 112 combinations
    for (cardElement of pepito){
        // console.log(cardElement);
        if ((exampleCard.number == cardElement.number) && (exampleCard.icon == cardElement.icon) && (exampleCard.color == cardElement.color)){
            return true
        }
    }

    return false;
    // while (!newCard && combinations < 112){
        
    // }
    // return console.log(usedCards);
}

function createNewCard(){
    let cardIsNew = false;
    let combinations = 0;
    while (!cardIsNew && combinations<112){
        let newCardObject = {
            number: createRandomCardNumber(),
            icon: createRandomIconsAmericanCards(),
            color: assignRandomColor()
        }
        // console.log(newCardObject)
        if (!(checkIfCardAlreadyExits(newCardObject, cardObjectsList))){
            cardIsNew = true
            cardObjectsList.push(newCardObject)
            return newCardObject;
        }
        combinations ++;
    }
    
}

console.log(createNewCard());
// console.log(cardObjectsList);

