// Create a 2D array to represent the board

export const boardHandler = (tr) => {
    const board = []
    console.log(tr[0]);

    for (let i =0; i < tr.length; i++) {
        const row = tr[i] // is the cells in one row or column?
        const rowData = []

        for (let j = 0; j < row.children.length; j++) { //! row.children will key into the tr element's children, giving us the nest array to loop over.
            const cell = row.children[j] //! this here is the actual td element that we can check what the mark is.

            if (cell.dataset.player) { //! when we were building out the event listeners, I made it so when a player clicks on a cell, it adds the mark as accessible data in the element.
                rowData.push(cell.dataset.player)
            }
            else {
                rowData.push(' ');
            }
        }
        board.push(rowData)
    }

    console.log(board);

    return board
}

    // There are many possiblities for winning in tic tac toe.
    // How do we represent them all? -> iterate over all squares every time and see if there are three in a row?
export const winnerHandler = (board => {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            return board[i][0]
    }
    if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            return board[0][i]
        }
    if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return board[0][0]
    }
    if (board[0][2] && board[0][2] === board[1][1] && board[2][0] === board[0][2]) {
        return board[0][2]
    }
}
return null // no winner
})

export const tieHandler = (board) => {
for (let i = 0; i < 3; i++) {
    for (let j =0; j < 3; j++) {
        if (board[i][j] === "") {
            return false
        } else return h1.appendChild(spanTie)
    }
}
}
