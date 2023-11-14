import { renderPlayerBoard, renderComputerBoard, resetGamePieces, setMessage, showPlacementPreview, removePlacementPreview } from "./domFunctions";
import { createGameboard } from "./gameboardFactory.js";

const Player = {
    gameboard: createGameboard('player'),
    isTurn: false,
    // currentlyPlacing initialized as false, but on game start will change to an object with two properties:
    //      The ship type that is currently being placed, and also the current placement orientation (horitzontal or vertical)
    currentlyPlacing: false,
    allShipsPlaced: false
}

const Computer = {
    gameboard: createGameboard('computer'),
    isTurn: false
}

function isGameOver() {
    return Player.gameboard.allSunk() || Computer.gameboard.allSunk();
}

function endGame() {
    Player.isTurn = false;
    Computer.isTurn = false;
    if(Computer.gameboard.allSunk()) {
        setMessage('You win!');
    } else {
        setMessage("You lose!");
    }
}

function beginGame() {
    Player.currentlyPlacing = { ship: 'carrier', orientation: 'horizontal' },
    Player.allShipsPlaced = false,
    Computer.isTurn = false;
    Player.gameboard = createGameboard('player');
    Computer.gameboard = createGameboard('computer');
    placeShipsRandomly(Computer);
    renderPlayerBoard();
    renderComputerBoard();
    resetGamePieces();
    setMessage('Place your CARRIER on the board.\n\nYou can press the R key to switch between horizontal and vertical placement.');
}

function handleCellClick(y,x) {
    
    if(!Player.isTurn) {
        return; // If it's not currently the player's turn, do nothing
    }

    // Input player's move and render the updated gameboard
    Computer.gameboard.recieveAttack(y,x);
    renderComputerBoard();

    // Check for game over state
    if (isGameOver()) {
        endGame();
    } else { 
        Player.isTurn = false;
        Computer.isTurn = true;

        // Set a short timeout to simulate the opponent thinking about their turn, then trigger computer move
        setTimeout(computerTakeTurn, 1000);
    }
}

function handlePlayerCellClick(y,x) {
    // Check to see if the player is currently placing game pieces
    if(Player.currentlyPlacing) {
        const placed = Player.gameboard.placeShip(Player.currentlyPlacing.ship, y, x, Player.currentlyPlacing.orientation);
        if(placed) {
            advancePlacement();
            renderPlayerBoard();
        }
    }
}

function advancePlacement() { // Simple switch logic to advance which ship the player is currently placing at the start of a game
    switch(Player.currentlyPlacing.ship) {
        case 'carrier':
            Player.currentlyPlacing.ship = 'battleship';
            setMessage('Place your BATTLESHIP on the board.\n\nYou can press the R key to switch between horizontal and vertical placement.');
            break;
        case 'battleship':
            Player.currentlyPlacing.ship = 'destroyer';
            setMessage('Place your DESTROYER on the board.\n\nYou can press the R key to switch between horizontal and vertical placement.');
            break;

        case 'destroyer':
            Player.currentlyPlacing.ship = 'submarine';
            setMessage('Place your SUBMARINE on the board.\n\nYou can press the R key to switch between horizontal and vertical placement.');
            break;
        case 'submarine':
            Player.currentlyPlacing.ship = 'patrol';
            setMessage('Place your PATROL BOAT on the board.\n\nYou can press the R key to switch between horizontal and vertical placement.');
            break;
        case 'patrol':
            Player.currentlyPlacing = false;
            Player.allShipsPlaced = true;
            Player.isTurn = true;
            setMessage('You\'re all set! Click a coordinate on the enemy board to fire at that location. Good luck!');
            break;
    }
}

function computerTakeTurn() {

    if(!Computer.isTurn) {
        return; // don't do anything if it's not the computer's turn - can be relevant since this function is called on a timeout
                // sometimes the timeout might start, and then a player will restart the game and then this function calls after the reset and causes problems
    }

    let attacked = false;
        const getRandomCoord = () => Math.floor(Math.random() * 10);
    
        while(!attacked) {
            const y = getRandomCoord();
            const x = getRandomCoord();
    
            // Try to attack the random location, and if successful, set attacked to true to exit the loop
            attacked = Player.gameboard.recieveAttack(y, x);
        }
        renderPlayerBoard(); // Render updated gameboard after the attack is successful

        // Check for game over state
        if (isGameOver()) {
            endGame();
        } else {
            Player.isTurn = true;
            Computer.isTurn = false;
        }
}

function placeShipsRandomly(player) {
    // Place ships randomly
    const shipsArray = [
        'carrier',
        'battleship',
        'destroyer',
        'submarine',
        'patrol'
    ]

    shipsArray.forEach((type) => {
        let placed = false;
        const getRandomCoord = () => Math.floor(Math.random() * 10);
    
        while(!placed) {
            const y = getRandomCoord();
            const x = getRandomCoord();
            const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
    
            // Try to place the ship, and if successful, set placed to true to exit the loop
            placed = player.gameboard.placeShip(type, y, x, orientation);
        }
    });
    
}

// EVENT LISTENER FOR THE BEGIN GAME BUTTON

document.getElementById('new-game-button').addEventListener('click', ()=> {

    if(Player.isTurn || Computer.isTurn || Player.currentlyPlacing) {
        const confirmed = window.confirm("Reset the current game?");

        if(!confirmed) {
            return;
        }
    }

    beginGame();
});

// Switch orientation of ship placement between horizontal and vertical
document.addEventListener('keydown', (event) => {

    if(Player.currentlyPlacing && event.key === 'r') {
        console.log(Player);
        if(Player.currentlyPlacing.orientation === 'horizontal') {
            Player.currentlyPlacing.orientation = 'vertical';
        } else Player.currentlyPlacing.orientation = 'horizontal';

        removePlacementPreview();
        const hoveredCell = document.querySelector('.cell:hover');
        if(hoveredCell) {
            const y = hoveredCell.dataset.row;
            const x = hoveredCell.dataset.col;
            showPlacementPreview(Number(y), Number(x));
        }
    }
});

export { handleCellClick, handlePlayerCellClick, Player, Computer };