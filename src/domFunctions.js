import { handleCellClick, handlePlayerCellClick, Player, Computer } from "./gameLogic";

function renderPlayerBoard() {
    const board = Player.gameboard.board;
    const container = document.getElementById('player-board');
    container.innerHTML = '';

    for(let row = 0; row < 10; row++) { // outer loop to traverse through the rows
        for(let column = 0; column < 10; column++) { // inner loop to traverse each column on each row
            const cell = document.createElement('div');
            cell.classList.add('cell');

            const cellInfo = board[row][column];
            if (cellInfo.ship) {
                cell.classList.add('ship')
            }
            if(cellInfo.status === 'empty') {
                cell.classList.add('empty');
                cell.addEventListener('click', () => {
                    handlePlayerCellClick(row, column);
                });
            } else if(cellInfo.status === 'miss') {
                cell.classList.add('miss');
            } else if(cellInfo.status === 'hit') {
                cell.classList.add('hit');
            }

            container.append(cell);

        }   
    }

};

function renderComputerBoard() {
    const board = Computer.gameboard.board;
    const container = document.getElementById('computer-board');
    container.innerHTML = '';

    for(let row = 0; row < 10; row++) { // outer loop to traverse through the rows
        for(let column = 0; column < 10; column++) { // inner loop to traverse each column on each row
            const cell = document.createElement('div');
            cell.classList.add('cell');

            const cellInfo = board[row][column];

            if(cellInfo.status === 'empty') {
                cell.classList.add('empty');
                cell.addEventListener('click', () => {
                    handleCellClick(row, column);
                });
            } else if(cellInfo.status === 'miss') {
                cell.classList.add('miss');
            } else if(cellInfo.status === 'hit') {
                cell.classList.add('hit');
            }

            container.append(cell);

        }   
    }
};

function updateGamePieces(player, shipType) {
    const container = document.getElementById(`${player}-pieces`) // Set the container to either the player's or the computer's pieces, depending
    const shipCells = container.querySelector(`.${shipType}`).querySelectorAll('.dummy-cell'); // put all the cells of ship piece into an array
    shipCells.forEach((cell) => { // loop through the array and add the hit styling to them to indicate the ship has been sunk
        cell.classList.add('hit');
    });
}

function resetGamePieces() {
    const ships = document.querySelectorAll('.dummy-cell');

    ships.forEach((cell) => {
        cell.classList.remove('hit');
    });
}

export { renderPlayerBoard, renderComputerBoard, updateGamePieces, resetGamePieces };