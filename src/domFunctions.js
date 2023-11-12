function renderPlayerBoard(board) {
    const container = document.getElementById('player-board');

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
            } else if(cellInfo.status === 'miss') {
                cell.classList.add('miss');
            } else if(cellInfo.status === 'hit') {
                cell.classList.add('hit');
            }

            container.append(cell);

        }   
    }

};

function renderComputerBoard(board) {
    const container = document.getElementById('computer-board');

    for(let row = 0; row < 10; row++) { // outer loop to traverse through the rows
        for(let column = 0; column < 10; column++) { // inner loop to traverse each column on each row
            const cell = document.createElement('div');
            cell.classList.add('cell');

            const cellInfo = board[row][column];

            if(cellInfo.status === 'empty') {
                cell.classList.add('empty');
            } else if(cellInfo.status === 'miss') {
                cell.classList.add('miss');
            } else if(cellInfo.status === 'hit') {
                cell.classList.add('hit');
            }

            container.append(cell);

        }   
    }
};

export { renderPlayerBoard, renderComputerBoard };