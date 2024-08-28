// // Your code here 
import { winnerHandler, tieHandler, boardHandler } from "./determine-winner.js"
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


window.onload = () =>{
}
const td = document.querySelectorAll("td")

    let currentPlayer = "X"

    td.forEach((el) => {
        const clickSquareHandler = (e) => {
            // when a square is clicked, it is either an X or an O
            const currentTable = document.getElementsByTagName("tr")
            let currentBoard = boardHandler(currentTable)
            if (e.target.innerHTML) {
                // add the "X" or "O" image
                const img = document.createElement("img")
                if (currentPlayer === "X") {
                    img.setAttribute("src", "./images/X_image.png")
                    e.target.setAttribute("data-player", "X")
                    currentPlayer = "O"
                } else {
                    img.setAttribute("src", "./images/O_image.png")
                    e.target.setAttribute("data-player", "O")
                    currentPlayer = "X"
                }
                e.target.appendChild(img)
            } else {
                // do nothing
                console.log("Square already is filled")
            }
            currentBoard = boardHandler(currentTable)
            if (winnerHandler(currentBoard) && winnerHandler(currentBoard) === "X") {
                h1.appendChild(spanWinnerX)
            } if (winnerHandler(currentBoard) && winnerHandler(currentBoard)=== "O") {
                h1.appendChild(spanWinnerO)
            } if (tieHandler(currentBoard)) {
                h1.appendChild(spanTie)
            }
            }
        el.addEventListener("click", clickSquareHandler)
    })

   // Phase 3: Winner or Tie

    // We need to make conditionals to determine a winner or tie
    // We need to add an event to the header for win or tie
    
