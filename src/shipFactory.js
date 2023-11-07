function createShip(type, length) {
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