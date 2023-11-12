import './style.css';
import { createShip } from "./shipFactory";
import { createGameboard } from "./gameboardFactory";
import { renderComputerBoard, renderPlayerBoard } from './domFunctions';
import { updateGamePieces } from './domFunctions';

renderPlayerBoard();
renderComputerBoard();