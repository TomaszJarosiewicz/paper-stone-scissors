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

const allItems = Object.assign(items);
const yourName = document.querySelector('.yourName');
const container = document.querySelector('.container');
const playerItems = document.querySelectorAll('.flex > .item');
const player = document.querySelector('.player');
const playerName = document.querySelector('#playerName');
const showBtn = document.querySelector('#showBtn');
const playPaper = document.querySelector('#playPaper');
const playStone = document.querySelector('#playStone');
const playScissors = document.querySelector('#playScissors');
const showPlayerItem = document.querySelector('.showPlayerItem');
const showComputerItem = document.querySelector('.showComputerItem');
const resultGame = document.querySelector('#resultGame');
const round = document.querySelector('#round');
const playerCount = document.querySelector('.player-count');
const computerCount = document.querySelector('.computer-count');

const win = document.querySelector('.game-over');
const winPlayer = document.querySelector('.win-player');
const text = document.querySelector('.text');
const button = document.querySelector('button');

let chooseItem;
let counter = 0;

playerCount.innerHTML = 0;
computerCount.innerHTML = 0;
round.innerHTML = 1;
container.style.display = 'none';

const playGame = (() => {

    const writeNamePlayer = () => {
        showBtn.addEventListener('click', () => {
            if(playerName.value.length === 0) {
                playerName.style.border = '1px solid #cc0c0c';
                container.style.display = 'none';
            } else {
                yourName.style.display = 'none';
                container.style.display = 'block';
                player.innerHTML = playerName.value;
            }
        });
    }

    const displayItemsPlayer = () => {
        for(let i = 0; i < playerItems.length; i++) {
            allItems.forEach(index => {
                if(index.id === 1) {
                    playerItems[0].innerHTML = index.item;
                }
                if(index.id === 2) {
                    playerItems[1].innerHTML = index.item;
                }
                if(index.id === 3) {
                    playerItems[2].innerHTML = index.item;
                }
            });
        }
    }

    const randomItem = () => {
        chooseItem = allItems[Math.floor(Math.random() * allItems.length)];
            [chooseItem].forEach(item => { showComputerItem.innerHTML = item.item });
        return chooseItem.id;
    }

    const addClassForWinner = (elementAdd, elementRemove) => {
        elementAdd.classList.add('winner');
        elementRemove.classList.remove('winner');
    }

    const displayItems = () => {
        allItems.forEach(el => {
            if(el.id === 1) {
                playPaper.addEventListener('click', () => {
                    round.innerHTML = counter++ + 1;
                    const paper = el.item;
                    showPlayerItem.innerHTML = paper;
                    switch(randomItem()) {
                        case 1: {
                            resultGame.innerHTML = 'draw';
                            showPlayerItem.classList.remove('winner');
                            showComputerItem.classList.remove('winner');
                        break;
                        }
                        case 2: {
                            resultGame.innerHTML = playerName.value + '&nbsp;wins';
                            playerCount.innerHTML = 1 + parseInt(playerCount.innerHTML);
                            addClassForWinner(showPlayerItem, showComputerItem);
                        break;
                        }
                        case 3: {
                            resultGame.innerHTML = 'computer wins';
                            computerCount.innerHTML = 1 + parseInt(computerCount.innerHTML);
                            addClassForWinner(showComputerItem, showPlayerItem);
                        break;
                        }
                    }
                    gameOver();
                });
            }

            if(el.id === 2) {
                playStone.addEventListener('click', () => {
                    round.innerHTML = counter++ + 1;
                    const stone = el.item;
                    showPlayerItem.innerHTML = stone;
                    switch(randomItem()) {
                        case 1: {
                            resultGame.innerHTML = 'computer wins';
                            computerCount.innerHTML = 1 + parseInt(computerCount.innerHTML);
                            addClassForWinner(showComputerItem, showPlayerItem);
                        break;
                        }
                        case 2: {
                            resultGame.innerHTML = 'draw';
                            showPlayerItem.classList.remove('winner');
                            showComputerItem.classList.remove('winner');
                        break;
                        }
                        case 3: {
                            resultGame.innerHTML = playerName.value + '&nbsp;wins';
                            playerCount.innerHTML = 1 + parseInt(playerCount.innerHTML);
                            addClassForWinner(showPlayerItem, showComputerItem);
                        break;
                        }
                    }
                    gameOver();
                });
            }

            if(el.id === 3) {
                playScissors.addEventListener('click', () => {
                    round.innerHTML = counter++ + 1;
                    const scissors = el.item;
                    showPlayerItem.innerHTML = scissors;
                    switch(randomItem()) {
                        case 1: {
                            resultGame.innerHTML = playerName.value + '&nbsp;wins';
                            playerCount.innerHTML = 1 + parseInt(playerCount.innerHTML);
                            addClassForWinner(showPlayerItem, showComputerItem);
                        break;
                        }
                        case 2: {
                            resultGame.innerHTML = 'computer wins';
                            computerCount.innerHTML = 1 + parseInt(computerCount.innerHTML);
                            addClassForWinner(showComputerItem, showPlayerItem);
                        break;
                        }
                        case 3: {
                            resultGame.innerHTML = 'draw';
                            showPlayerItem.classList.remove('winner');
                            showComputerItem.classList.remove('winner');
                        break;
                        }
                    }
                    gameOver();
                });
            }
        });
    }

    const gameOver = () => {
        const theWinner = 'the winner<br />is';
        if(counter > 20) {
            round.innerHTML = 20;
            win.style.display = 'block';
            if(playerCount.innerHTML > computerCount.innerHTML) {
                text.innerHTML = theWinner;
                winPlayer.innerHTML = playerName.value;
            } else if(playerCount.innerHTML === computerCount.innerHTML) {
                text.innerHTML = 'game finished';
                winPlayer.innerHTML = 'draw';
            } else {
                text.innerHTML = theWinner;
                winPlayer.innerHTML = 'computer';
            }
        }
    }

    const newGame = () => {
        button.addEventListener('click', () => {
            location.reload();
        });
    }

    return {
        returnGame: () => {
            displayItemsPlayer();
            displayItems();
            writeNamePlayer();
            newGame();
        }
    }

})();

playGame.returnGame();





