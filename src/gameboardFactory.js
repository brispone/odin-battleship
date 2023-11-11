function createGameboard() {

    // Create a 2-dimensional array for the gameboard - each cell initalizaed as null to signify that it is empty
    // Outer arrays are the vertical, inner is horizontal
    // ie: Position A1 would be board[0][0]
    const board = [
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null]
    ]

    return {
        board: board,
        placeShip: function() {

        },
        recieveAttack: function() {

        }
    }
}

export { createGameboard };