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
const win = document.querySelector('.game-over');
const winPlayer = document.querySelector('.win-player');
const text = document.querySelector('.text');
const button = document.querySelector('button');
const round = document.querySelector('#round');
const player = document.querySelector('.player');
const playPaper = document.querySelector('#playPaper');
const playStone = document.querySelector('#playStone');
const playScissors = document.querySelector('#playScissors');
const showPlayerItem = document.querySelector('.showPlayerItem');
const showComputerItem = document.querySelector('.showComputerItem');
const game = document.querySelector('.game');
const playerCount = document.querySelector('.player-count');
const computerCount = document.querySelector('.computer-count');
let playerName;
let chooseItem;
let counter = 0;

playerCount.innerHTML = 0;
computerCount.innerHTML = 0;
round.innerHTML = 1;

const playGame = (() => {

    const writeNamePlayer = () => {
        playerName = prompt('Your name');
        if(playGame != null) {
            player.innerText = playerName;
        }
    }

    const randomItem = () => {
        chooseItem = allItems[Math.floor(Math.random() * allItems.length)];
            [chooseItem].forEach(item => {
                showComputerItem.innerHTML = item.item;
            });
            return chooseItem.id;
        }

    const addClassForWinner = (elementAdd, elementRemove) => {
        elementAdd.classList.add('winner');
        elementRemove.classList.remove('winner');
    }

    const displayItemsPlayer = () => {
        allItems.forEach(el => {
            if(el.id === 1) {
                playPaper.addEventListener('click', () => {
                    round.innerHTML = counter++ + 1;
                    const paper = el.item;
                    showPlayerItem.innerHTML = paper;
                    showComputerItem.innerHTML = randomItem();
                    switch(randomItem()) {
                        case 1: {
                            console.log('Draw');
                            showPlayerItem.classList.remove('winner');
                            showComputerItem.classList.remove('winner');
                        break;
                        }
                        case 2: {
                            console.log('Player wins');
                            playerCount.innerHTML = 1 + parseInt(playerCount.innerHTML);
                            addClassForWinner(showPlayerItem, showComputerItem);
                        break;
                        }
                        case 3: {
                            console.log('Computer wins');
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
                    showComputerItem.innerHTML = randomItem();
                    switch(randomItem()) {
                        case 1: {
                            console.log('Computer Wins');
                            computerCount.innerHTML = 1 + parseInt(computerCount.innerHTML);
                            addClassForWinner(showComputerItem, showPlayerItem);
                        break;
                        }
                        case 2: {
                            console.log('Draw');
                            showPlayerItem.classList.remove('winner');
                            showComputerItem.classList.remove('winner');
                        break;
                        }
                        case 3: {
                            console.log('Player wins');
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
                    showComputerItem.innerHTML = randomItem();
                    switch(randomItem()) {
                        case 1: {
                            console.log('Player Wins');
                            playerCount.innerHTML = 1 + parseInt(playerCount.innerHTML);
                            addClassForWinner(showPlayerItem, showComputerItem);
                        break;
                        }
                        case 2: {
                            console.log('Computer Wins');
                            computerCount.innerHTML = 1 + parseInt(computerCount.innerHTML);
                            addClassForWinner(showComputerItem, showPlayerItem);
                        break;
                        }
                        case 3: {
                            console.log('Draw');
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
        if(counter > 20) {
            round.innerHTML = 20;
            win.style.display = 'block';
            if(playerCount.innerHTML > computerCount.innerHTML) {
                text.innerHTML = 'the winner <br /> is';
                winPlayer.innerHTML = playerName;
            } else if(playerCount.innerHTML === computerCount.innerHTML) {
                text.innerHTML = 'game finished';
                winPlayer.innerHTML = 'draw';
            } else {
                text.innerHTML = 'the winner <br /> is';
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
        showReturnItems: () => {
            displayItemsPlayer();
            writeNamePlayer();
            newGame();
        }
    }

})();

playGame.showReturnItems();





