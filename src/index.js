import { createShip } from "./shipFactory";
import { createGameboard } from "./gameboardFactory";

const Player = {
    gameboard: createGameboard()
};

const Computer = {
    gameboard: createGameboard()
}

