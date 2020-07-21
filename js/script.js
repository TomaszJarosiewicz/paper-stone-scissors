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
const playPaper = document.querySelector('#playPaper');
const playStone = document.querySelector('#playStone');
const playScissors = document.querySelector('#playScissors');
const showPlayerItem = document.querySelector('.showPlayerItem');
const showComputerItem = document.querySelector('.showComputerItem');
const game = document.querySelector('.game');
const playerCount = document.querySelector('.player-count');
const computerCount = document.querySelector('.computer-count');
let chooseItem;
let counter = 1;

playerCount.innerHTML = 0;
computerCount.innerHTML = 0;

const playGame = (() => {

    const randomItem = () => {
        chooseItem = allItems[Math.floor(Math.random() * allItems.length)];
            [chooseItem].forEach(item => {
                showComputerItem.innerHTML = item.item;
            });
            return chooseItem.id;
        }

    // const addClassForWinner = (element) => {
    //     return element.classList.add('winner');
    // }
    // const removeClassForWinner = (element) => {
    //     return element.classList.add('winner');
    // }

    const displayItemsPlayer = () => {
        allItems.forEach(el => {
            if(el.id === 1) {
                playPaper.addEventListener('click', () => {
                    const paper = el.item;
                    showPlayerItem.innerHTML = paper;
                    showComputerItem.innerHTML = randomItem();
                    counter++;
                    if(counter) {
                        if(randomItem() === 1) {
                            console.log('Draw');
                            return;
                            } else if(randomItem() === 2) {
                                console.log('Player wins');
                            } else if(randomItem() === 3) {
                                console.log('Computer wins');
                        } else {
                            return;
                        }
                    }
                });
            }
            if(el.id === 2) {
                playStone.addEventListener('click', () => {
                    const stone = el.item;
                    showPlayerItem.innerHTML = stone;
                    showComputerItem.innerHTML = randomItem();
                    counter++;
                    if(counter) {
                        if(randomItem() === 1) {
                            console.log('Computer Wins');
                            } else if(randomItem() === 2) {
                                console.log('Draw');
                            } else if(randomItem() === 3) {
                                console.log('Player wins');
                        } else {
                            return;
                        }
                    }
                });
            }
            if(el.id === 3) {
                playScissors.addEventListener('click', () => {
                    const scissors = el.item;
                    showPlayerItem.innerHTML = scissors;
                    showComputerItem.innerHTML = randomItem();
                    counter++;
                    if(counter) {
                        if(randomItem() === 1) {
                            console.log('Player Wins');
                            } else if(randomItem() === 2) {
                                console.log('Computer Wins');
                            } else if(randomItem() === 3) {
                                console.log('Draw');
                        } else {
                            return;
                        }
                    }
                });
            }
        });
    }

    return {
        showReturnItems: () => {
            displayItemsPlayer();
        }
    }

})();

playGame.showReturnItems();





