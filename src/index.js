import { createShip } from "./shipFactory";

const ship = createShip('patrol boat');

console.log(ship);
ship.hit();
ship.isSunk();