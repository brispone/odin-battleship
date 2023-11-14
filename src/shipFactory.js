function createShip(type) {
    
    const length = shipLength(type); // get the ship's length according to its type

    return {
        type: type,
        length: length,
        hits: 0,
        hit: function() {
            this.hits++;
            console.log(`This ship has been hit ${this.hits} times`)
        },
        isSunk: function() {
            if (this.hits >= this.length) {
                return true;
            } else return false;
        }
    };
}

// Function that will return the length of a ship based on what type of ship it is
function shipLength(type) {
    switch(type) {
        case 'carrier':
            return 5;
            break;
        case 'battleship':
            return 4;
            break;
        case 'destroyer':
            return 3;
            break;
        case 'submarine':
            return 3;
            break;
        case 'patrol':
            return 2;
            break;
        default:
            return;
    }
}

export { createShip, shipLength };