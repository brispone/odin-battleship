import { renderPlayerBoard, renderComputerBoard } from "./domFunctions";
import { createGameboard } from "./gameboardFactory.js";

const Player = {
    gameboard: createGameboard(),
    isTurn: false
}

const Computer = {
    gameboard: createGameboard(),
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
    Player.isTurn = true;
    Computer.isTurn = false;
    Player.gameboard = createGameboard();
    Computer.gameboard = createGameboard();
    placeShipsRandomly(Player);
    placeShipsRandomly(Computer);
    renderPlayerBoard();
    renderComputerBoard();
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
        'patrol boat'
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

export { handleCellClick, Player, Computer };