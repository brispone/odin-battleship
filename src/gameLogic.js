import { renderPlayerBoard, renderComputerBoard, resetGamePieces, setMessage } from "./domFunctions";
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
        alert("You win!");
    } else {
        alert("You lose!");
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
    setMessage('Place your carrier on the board. You can press the R key to switch between horizontal and vertical placement.');
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
        alert("the game is over");
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
            setMessage('Place your battleship on the board. You can press the R key to switch between horizontal and vertical placement.');
            break;
        case 'battleship':
            Player.currentlyPlacing.ship = 'destroyer';
            setMessage('Place your destroyer on the board. You can press the R key to switch between horizontal and vertical placement.');
            break;

        case 'destroyer':
            Player.currentlyPlacing.ship = 'submarine';
            setMessage('Place your submarine on the board. You can press the R key to switch between horizontal and vertical placement.');
            break;
        case 'submarine':
            Player.currentlyPlacing.ship = 'patrol';
            setMessage('Place your patrol boat on the board. You can press the R key to switch between horizontal and vertical placement.');
            break;
        case 'patrol':
            Player.currentlyPlacing = false;
            Player.allShipsPlaced = true;
            Player.isTurn = true;
            setMessage('Click a coordinate on the enemy board to fire at that location. Good luck!');
            break;
    }
}

function computerTakeTurn() {
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
            alert("the game is over");
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
    beginGame();
});

// Switch orientation of ship placement between horizontal and vertical
document.addEventListener('keydown', (event) => {
    if(Player.currentlyPlacing && event.key === 'r') {
        if(Player.currentlyPlacing.orientation === 'horizontal') {
            Player.currentlyPlacing.orientation = 'vertical';
        } else Player.currentlyPlacing.orientation = 'horizontal';
    }
});

export { handleCellClick, handlePlayerCellClick, Player, Computer };