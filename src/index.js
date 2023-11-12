import './style.css';
import { createShip } from "./shipFactory";
import { createGameboard } from "./gameboardFactory";
import { renderComputerBoard, renderPlayerBoard } from './domFunctions';

renderPlayerBoard();
renderComputerBoard();
