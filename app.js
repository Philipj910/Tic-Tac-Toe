const gameBoard = (() => {
    const boardCell = document.querySelectorAll(".gridCell")
    const gameBoardArray = Array.from(boardCell);
    const container = document.querySelector(".container")
    function DOMDisplayWinner1() {
        const formDisplay = document.querySelector(".formDisplay");
        formDisplay.remove();
        const winnerDisplay = document.createElement("div");
        winnerDisplay.classList = "winnerDisplay";
        winnerDisplay.innerText = player1.name + " wins";
        const reloadGame = document.createElement("button");
        reloadGame.innerText = "Reset"
        reloadGame.classList = "reloadBtn";
        container.appendChild(winnerDisplay);
        container.appendChild(reloadGame);
        reloadGame.addEventListener("click", function() {
            window.location.reload()
        })
    }
    function DOMDisplayWinner2() {
        const formDisplay = document.querySelector(".formDisplay");
        formDisplay.remove();
        const winnerDisplay = document.createElement("div");
        winnerDisplay.classList = "winnerDisplay";
        winnerDisplay.innerText = player2.name + " wins";
        const reloadGame = document.createElement("button");
        reloadGame.innerText = "Reset";
        reloadGame.classList = "reloadBtn";
        container.appendChild(winnerDisplay);
        container.appendChild(reloadGame);
        reloadGame.addEventListener("click", function() {
            window.location.reload();
        })
    }
    function DOMDisplayTie() {
        const formDisplay = document.querySelector(".formDisplay");
        formDisplay.remove();
        const winnerDisplay = document.createElement("div");
        winnerDisplay.classList = "winnerDisplay";
        winnerDisplay.innerText = "It's a tie";
        const reloadGame = document.createElement("button");
        reloadGame.innerText = "Reset";
        reloadGame.classList = "reloadBtn";
        container.appendChild(winnerDisplay);
        container.appendChild(reloadGame);
        reloadGame.addEventListener("click", function() {
            window.location.reload();
        })
    }
    const playerChoice = gameBoardArray.forEach((grid, index) => {
        gameBoardArray[index] = 0
        turn = true;
        grid.addEventListener("click", function() {
            if(turn === true && gameBoardArray[index] != player2.choice) {
                grid.innerText = player1.choice
                gameBoardArray[index] = player1.choice
                turn = false
            } else if(turn === false && gameBoardArray[index] != player1.choice) {
                grid.innerText = player2.choice
                gameBoardArray[index] = player2.choice
                turn = true
            }  function player1Winner() { //this code hurts my eyes:
                if(gameBoardArray.indexOf("X") === 0 && gameBoardArray.indexOf("X", 1) === 1 && gameBoardArray.indexOf("X", 2) === 2){
                    DOMDisplayWinner1()
                } else if (gameBoardArray.indexOf("X", 3) === 3 && gameBoardArray.indexOf("X", 4) === 4 && gameBoardArray.indexOf("X", 5) === 5) {
                    DOMDisplayWinner1()
                } else if (gameBoardArray.indexOf("X", 6) === 6 && gameBoardArray.indexOf("X", 7) === 7 && gameBoardArray.indexOf("X", 8) === 8) {
                    DOMDisplayWinner1()
                } else if (gameBoardArray.indexOf("X", 0) === 0 && gameBoardArray.indexOf("X", 3) === 3 && gameBoardArray.indexOf("X", 6) === 6) {
                    DOMDisplayWinner1()
                } else if (gameBoardArray.indexOf("X", 1) === 1 && gameBoardArray.indexOf("X", 4) === 4 && gameBoardArray.indexOf("X", 7) === 7) {
                    DOMDisplayWinner1()
                } else if (gameBoardArray.indexOf("X", 2) === 2 && gameBoardArray.indexOf("X", 5) === 5 && gameBoardArray.indexOf("X", 8) === 8) {
                    DOMDisplayWinner1()
                } else if (gameBoardArray.indexOf("X", 0) === 0 && gameBoardArray.indexOf("X", 4) === 4 && gameBoardArray.indexOf("X", 8) === 8) {
                    DOMDisplayWinner1()
                } else if (gameBoardArray.indexOf("X", 2) === 2 && gameBoardArray.indexOf("X", 4) === 4 && gameBoardArray.indexOf("X", 6) === 6) {
                    DOMDisplayWinner1()
                } else if(gameBoardArray.includes(0) === false) {
                    DOMDisplayTie()
                }
            };
                player1Winner()
                function player2Winner() {
                if(gameBoardArray.indexOf("O") === 0 && gameBoardArray.indexOf("O", 1) === 1 && gameBoardArray.indexOf("O", 2) === 2){
                    DOMDisplayWinner2()
                } else if (gameBoardArray.indexOf("O", 3) === 3 && gameBoardArray.indexOf("O", 4) === 4 && gameBoardArray.indexOf("O", 5) === 5) {
                    DOMDisplayWinner2()
                } else if (gameBoardArray.indexOf("O", 6) === 6 && gameBoardArray.indexOf("O", 7) === 7 && gameBoardArray.indexOf("O", 8) === 8) {
                    DOMDisplayWinner2()
                } else if (gameBoardArray.indexOf("O", 0) === 0 && gameBoardArray.indexOf("O", 3) === 3 && gameBoardArray.indexOf("O", 6) === 6) {
                    DOMDisplayWinner2()
                } else if (gameBoardArray.indexOf("O", 1) === 1 && gameBoardArray.indexOf("O", 4) === 4 && gameBoardArray.indexOf("O", 7) === 7) {
                    DOMDisplayWinner2()
                } else if (gameBoardArray.indexOf("O", 2) === 2 && gameBoardArray.indexOf("O", 5) === 5 && gameBoardArray.indexOf("O", 8) === 8) {
                    DOMDisplayWinner2()
                } else if (gameBoardArray.indexOf("O", 0) === 0 && gameBoardArray.indexOf("O", 4) === 4 && gameBoardArray.indexOf("O", 8) === 8) {
                    DOMDisplayWinner2()
                } else if (gameBoardArray.indexOf("O", 2) === 2 && gameBoardArray.indexOf("O", 4) === 4 && gameBoardArray.indexOf("O", 6) === 6) {
                    DOMDisplayWinner2()
                } 
        };
            player2Winner()
            console.log(gameBoardArray)
        })
        });
    
    return { playerChoice, }
})();

const playerFactory = (name, choice) => {
    const choiceInfo = () => {
        if(choice !== "X" && choice !== "O") {
            alert("Please pick x or o")
        }
    }
    choiceInfo();
    return { name, choice };
};

    const player1SubmitBtn = document.getElementById("player1Submit");
    const player2SubmitBtn = document.getElementById("player2Submit");
    let player1Display = document.createElement("div");
    let player2Display = document.createElement("div");
    let player1 = player1SubmitBtn.addEventListener("click", function() {
                        const player1Input = document.getElementById("player1").value;
                        player1 = playerFactory(player1Input, "X");
                        player1Display.classList = "allPlayerName"
                        player1Display.innerText = player1Input;
                        const player1Name = document.querySelector("#player1Name");
                        player1Name.appendChild(player1Display);
                        });
    let player2 = player2SubmitBtn.addEventListener("click", function() {
                        const player2Input = document.getElementById("player2").value;
                        player2 = playerFactory(player2Input, "O")  
                        player2Display.classList = "allPlayerName";
                        player2Display.innerText = player2Input;
                        const player2Name = document.querySelector("#player2Name");
                        player2Name.appendChild(player2Display);
                        console.log(player2);
                        });

