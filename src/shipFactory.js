function createShip(type) {
    
    let length;
    switch(type) {
        case 'carrier':
            length = 5;
            break;
        case 'battleship':
            length = 4;
            break;
        case 'destroyer':
            length = 3;
            break;
        case 'submarine':
            length = 3;
            break;
        case 'patrol boat':
            length = 2;
            break;
        default:
            return;
    }

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

export { createShip };