import { renderComputerBoard } from "./domFunctions";
import { Player, Computer } from "./index.js";

function playerTakeTurn(y, x) {
    Computer.gameboard.recieveAttack(y,x);
    renderComputerBoard();
}

export { playerTakeTurn };