import './style.css';
import { createShip } from "./shipFactory";
import { createGameboard } from "./gameboardFactory";
import { renderComputerBoard, renderPlayerBoard } from './domFunctions';

const Player = {
    gameboard: createGameboard(),
    isTurn: false
}

const Computer = {
    gameboard: createGameboard(),
    isTurn: false
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
/*
placeShipsRandomly(Player);
placeShipsRandomly(Computer);

renderPlayerBoard();
renderComputerBoard();*/

export { Player, Computer };