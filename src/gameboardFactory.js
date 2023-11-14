import { createShip } from "./shipFactory";
import { updateGamePieces, setMessage, triggerHitMessage } from "./domFunctions";
import { Player } from "./gameLogic";

function createGameboard(owner) {

    // Initialize the gameboard, 2-dimensional array that can be accessed like board[column][row] - status should be empty, miss, or hit
    const initializeEmptyCell = () => ({ ship: null, status: 'empty' });
    const board = Array.from({ length: 10 }, () => Array.from({ length: 10 }, initializeEmptyCell));

    return {
        owner: owner,
        board: board,
        ships: [],
        placeShip: function(type, y, x, orientation) { // type of ship, coordinates of the starting point of ship placement, and then vertical or horizontal orientation
            console.log(`Attempting to place ${type} at (${y}, ${x}) with orientation ${orientation}`);
            const newShip = createShip(type);
            let ycoord = y;
            let xcoord = x;

            // Check to make sure there the chosen coords and orientation are a valid placement
            if(!this.checkCells(ycoord, xcoord, newShip.length, orientation)) {
                console.log("There's already a ship here!");
                return false; // Let whoever called this function know that it failed
            }

            // Place the ship at the relevant coordinates
            for(let i = 0; i < newShip.length; i++) {
                this.board[ycoord][xcoord].ship = newShip;
                if(orientation == "vertical") {
                    ycoord++;
                } else {
                    xcoord++;
                }
            }
            // Add the ship to the list of placed ships on this board
            this.ships.push(newShip);
            return true; // Let whoever called this function know that it succeeded
        },
        recieveAttack: function(ycoord, xcoord) {

            if (this.board[ycoord][xcoord].status !== 'empty') {
                return false; // Cell has already received an attack, so do nothing - return false so that whoever called this function knows that it failed
            }
            const ship = this.board[ycoord][xcoord].ship;
            if (ship) {
                ship.hit();
                if(Player.isTurn) {
                    triggerHitMessage();
                }
                this.board[ycoord][xcoord].status = 'hit';

                // Check if the ship was sunk, if so update game pieces to the side of the gameboards so the player knows what they sunk and what is remaining
                if(ship.isSunk()) {
                    if(Player.isTurn) {
                        setMessage(`You sunk my ${ship.type}!`);
                    }
                    updateGamePieces(this.owner, ship.type);
                }

            } else {
                if(Player.isTurn) {
                    setMessage('Miss!');
                }
                this.board[ycoord][xcoord].status = 'miss';
            }
            return true; // let whoever called this function know that it succeeded
        },
        allSunk: function() {
            // check all of the ships attached to this gameboard, if any of them return as sunk, return true - otherwise it will return false
            return this.ships.every((ship) => ship.isSunk());
        },
        checkCells: function(y, x, length, orientation) {
            let ycoord = y;
            let xcoord = x;

            // Traverse the relevant coordinates and make sure they don't go outside of the gameboard or there isn't a ship already there
            for(let i = 0; i < length; i++) {
                if (ycoord >= 10 || xcoord >= 10 || this.board[ycoord][xcoord].ship) {
                    return false;
                }
                if(orientation == 'vertical') {
                    ycoord++;
                } else {
                    xcoord++;
                }
            }
            return true;
        }
    }
}

export { createGameboard };