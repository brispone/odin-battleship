import { createShip } from "./shipFactory";

function createGameboard() {

    // Create a 2-dimensional array for the gameboard - each cell initalizaed as null to signify that it is empty
    // Outer arrays are the vertical, inner is horizontal
    // ie: Position A1 would be board[0][0]
    const board = [
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null]
    ]

    return {
        board: board,
        placeShip: function(type, y, x, orientation) { // type of ship, coordinates of the starting point of ship placement, and then vertical or horizontal orientation
            const newShip = createShip(type);
            let ycoord = y;
            let xcoord = x;

            if(!checkCells(this.board, ycoord, xcoord, newShip.length, orientation)) {
                console.log("There's already a ship here!");
                return;
            }

            // Place the ship at the relevant coordinates
            for(let i = 0; i < newShip.length; i++) {
                this.board[ycoord][xcoord] = newShip;
                if(orientation == "vertical") {
                    ycoord++;
                } else {
                    xcoord++;
                }
            }

        },
        recieveAttack: function(ycoord, xcoord) {
            const positionContent = this.board[ycoord][xcoord];
            if (positionContent) {
                positionContent.hit();
            } else console.log('Missed!');
        }
    }
}

function checkCells(gameboard, y, x, length, orientation) {

    let ycoord = y;
    let xcoord = x;

    // Traverse the relevant coordinates and make sure they are empty
    for(let i = 0; i < length; i++) {
        if (gameboard[ycoord][xcoord]) {
            return false;
        }
        if(orientation == "vertical") {
            ycoord++;
        } else {
            xcoord++;
        }
    }
    return true;
}

export { createGameboard };