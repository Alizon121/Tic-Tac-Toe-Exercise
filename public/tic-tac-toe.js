// // Your code here 
import { winnerHandler, tieHandler, table, board, boardHandler } from "./determine-winner.js"


window.onload = () =>{
    // Code for adding the Xs and Os to the board
    const td = document.querySelectorAll("td")
    let currentPlayer = "X"

    td.forEach((el) => {
        const clickSquareHandler = (e) => {
            // when a square is clicked, it is either an X or an O
            if (e.target.innerHTML) {
                // add the "X" or "O" image
                const img = document.createElement("img")
                if (currentPlayer === "X") {
                    img.setAttribute("src", "./images/X_image.png")
                    currentPlayer = "O"
                } else {
                    img.setAttribute("src", "./images/O_image.png")
                    currentPlayer = "X"
                }
                e.target.appendChild(img)
            } else {
                    // do nothing
                    console.log("Square already is filled")
                }
            }
        el.addEventListener("click", clickSquareHandler)
    })

   // Phase 3: Winner or Tie

    // We need to make conditionals to determine a winner or tie
    // We need to add an event to the header for win or tie
    
    const h1 = document.getElementsByTagName("h1")
    // Add X winner tag/text to heading
    const spanWinnerX = document.createElement("span")
    spanWinnerX.innerText = "Winner: X"


    // Add O winner tag/text to heading
    const spanWinnerO = document.createElement("span")
    spanWinnerO.innerText = "Winner: O"


    // Add tie to heading
    const spanTie = document.createElement("span")
    spanTie.innerText = "Winner: Tie"

    board
    boardHandler(table)

    // identify winner/tie
    if (winnerHandler(board)) {
        // if winner is X
        if (board[i][j] === img && img.src === "./images/X_image.png") {
            h1.appendChild(spanWinnerX)
        }
        // if winner is O
        if (board[i][j] === img && img.src === "./images/O_image.png") {
            h1.appendChild(spanWinnerO)
        }
    }
    
    // Add the code for tie
        if (tieHandler(board)) {
            h1.appendChild(spanTie)
        }

}
