const items = [
    {
        id: 1,
        item: '<i class="fas fa-toilet-paper"></i>'
    },
    {
        id: 2,
        item: '<i class="fas fa-gem"></i>'
    },
    {
        id: 3,
        item: '<i class="fas fa-cut"></i>'
    }
];

let allItems = Object.assign(items);
const chooseItem = allItems[Math.floor(Math.random() * allItems.length)];
const displayItems = document.querySelectorAll('.flex > .item');
const firstElement = document.createElement('div');
const secondElement = document.createElement('div');
const game = document.querySelector('.game');
const playerCount = document.querySelector('.count');
const computerCount = document.querySelector('.computer-count');
const randomItem = [chooseItem];
let counter = 0;

const playGame = (() => {

    const createItemPlayer = () => {
        game.prepend(firstElement);
        firstElement.setAttribute('class', 'player');
    }

    const createItemComputer = () => {
        game.append(secondElement);
        secondElement.setAttribute('class', 'computer');
    }

    const addClassForWinner = (element) => {
        element.classList.add('winner');
    }

    const displayItemsPlayer = () => {
        for(let i = 0; i < displayItems.length; i++) {
            allItems.forEach(index => {
                if(index.id === 1) {
                    displayItems[0].innerHTML = index.item;
                }
                if(index.id === 2) {
                    displayItems[1].innerHTML = index.item;
                }
                if(index.id === 3) {
                    displayItems[2].innerHTML = index.item;
                }
            });
        }
    }

    const returnItems = () => {
        for(let i = 2; i < displayItems.length; i++) {
            displayItems[0].addEventListener('click', () => {
                counter++;
                createItemPlayer();
                createItemComputer();
                allItems.forEach(itemP => {
                    if(itemP.id === 1) {
                        firstElement.innerHTML = itemP.item;
                    }
                    randomItem.forEach(itemC => {
                        secondElement.innerHTML = itemC.item;
                        if(itemC.id === 2) {
                            playerCount.innerHTML = counter;
                            addClassForWinner(firstElement);
                        } else if(itemP.id === itemC.id) {
                            console.log('remis');
                        } if(itemC.id === 3) {
                            computerCount.innerHTML = counter;
                            addClassForWinner(secondElement);
                        }
                    });
                });
            });

            displayItems[1].addEventListener('click', () => {
                createItemPlayer();
                createItemComputer();
                allItems.forEach(itemP => {
                    if(itemP.id === 2) {
                        firstElement.innerHTML = itemP.item;
                    }
                    randomItem.forEach(itemC => {
                        secondElement.innerHTML = itemC.item;
                        if(itemC.id === 3) {
                            playerCount.innerHTML = counter;
                            addClassForWinner(firstElement);
                        } else if(itemP.id === itemC.id) {
                            console.log('remis');
                        } if(itemC.id === 1) {
                            computerCount.innerHTML = counter;
                            addClassForWinner(secondElement);
                        }
                    });
                });
            });

            displayItems[2].addEventListener('click', () => {
                createItemPlayer();
                createItemComputer();
                allItems.forEach(itemP => {
                    if(itemP.id === 3) {
                        firstElement.innerHTML = itemP.item;
                    }
                    randomItem.forEach(itemC => {
                        secondElement.innerHTML = itemC.item;
                        if(itemC.id === 1) {
                            playerCount.innerHTML = counter;
                            addClassForWinner(firstElement);
                        } else if(itemP.id === itemC.id) {
                            console.log('remis');
                        } if(itemC.id === 2) {
                            computerCount.innerHTML = counter;
                            addClassForWinner(secondElement);
                        }
                    });
                });
            });
        }
    }

    return {
        showReturnItems: () => {
            displayItemsPlayer();
                returnItems();
        }
    }

})();

playGame.showReturnItems();


