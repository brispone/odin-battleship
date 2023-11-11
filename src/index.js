import { createShip } from "./shipFactory";
import { createGameboard } from "./gameboardFactory";

const Player = {
    gameboard: createGameboard()
}

const Computer = {
    gameboard: createGameboard()
}

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
        placed = Player.gameboard.placeShip(type, y, x, orientation);
    }
});

shipsArray.forEach((type) => {
    let placed = false;
    const getRandomCoord = () => Math.floor(Math.random() * 10);

    while(!placed) {
        const y = getRandomCoord();
        const x = getRandomCoord();
        const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';

        // Try to place the ship, and if successful, set placed to true to exit the loop
        placed = Computer.gameboard.placeShip(type, y, x, orientation);
    }
});

console.log(Player.gameboard.board);
console.log(Computer.gameboard.board);