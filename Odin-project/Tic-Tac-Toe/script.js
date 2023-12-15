



//Catching html elements here
const gameSquareGrid = document.querySelector("#container-game-board-square-grid");
const btnNewPlayer = document.querySelector("#new-player-form-button"); 
const btnClearPlayerList = document.querySelector("#clear-player-list-btn");
const btnNewPlayerCancel = document.querySelector("#new-player-form-button-cancel");
const btnStartGame = document.querySelector("#start-game-btn");
const newPlayerForm = document.querySelector("#new-player-form");
const newPlayerFormSubmit = document.querySelector("#new-player-submit");
const playerOneScore = document.querySelector("#playerone-score");
const playerTwoScore = document.querySelector("#playertwo-score");
const roundsCounter = document.querySelector("#rounds-counter");
const btnNextRound = document.querySelector("#next-round-btn");
const headerWinner = document.querySelector("#header-winner");
const btnResetGame = document.querySelector("#btn-reset-game");

let gameSquareArray = Array.from(gameSquareGrid.children);


function playerFactory(name, age) {

    const nickname = "Dr. " + name;

    let playerScore = 0;

    const greetings = () => console.log("Greetings", name);
    const getNickname = () => nickname;
    const getPlayerScore = () => playerScore;
    const addPoint = () => playerScore++;
    const resetPoints = () => playerScore = 0;

    
    return {name, age, nickname, greetings, getPlayerScore, getNickname, addPoint, resetPoints};

};

let winScore = 3;
let playerArray = [];
let squareArray = [[],[],[],
                   [],[],[],
                   [],[],[]];
let inRowIndexes = [[0,1,2],[3,4,5],[6,7,8],
                    [0,3,6],[1,4,7],[2,5,8],
                    [0,4,8],[2,4,6]];


// Wrap in {curly braces} to make it an object. allowing more structured log.


const gameBoard = (function () {

    //If true, its player 1 turn. call function after every round to switch boolean.
    let playerTurn = true;
    let roundStarted = false;


    const getScore = () =>`Player 1: ${playerOne.getPlayerScore()}.`+ "\n" + `Player 2: ${playerTwo.getPlayerScore()}.`;
    const getPlayerTurn = () => playerTurn;
    const roundStartedCheck = () => roundStarted;
    const getPlayerArray = () => playerArray;


    // Use a boolean value to check whos turn it is.
    function switchTurn() {
        if (playerTurn == true){
            playerTurn = false;
        } else if(playerTurn == false){
            playerTurn = true;
        }
    }

    function resetGame() {
        playerArray[0].resetPoints();
        playerArray[1].resetPoints();
        displayController.updateScore();
        playerTurn = true;
        roundStarted = false;
        displayController.ClearBoard();
        displayController.clearPlayers();
        btnNextRound.style.visibility = "hidden";
        headerWinner.style.visibility = "hidden";

    }

    function startGame() {
        if(playerArray.length == 2){
            roundStarted = true;
        }
    }
    function pauseGame(){
        roundStarted = false;
    }



    function nextRound() {
        if(playerArray[0].getPlayerScore() != 3 && playerArray[1].getPlayerScore() != 3){
            for(let i = 0; i < squareArray.length;i++){
                squareArray[i].splice(-1);
            }
            displayController.ClearBoard();
            displayController.updateScore();
            gameBoard.startGame();
            if(!gameBoard.getPlayerTurn()){
                gameBoard.switchTurn();
            }

        }
    }

    function btnCheck(btn) {
        if(gameBoard.roundStartedCheck()){
            if(gameBoard.getPlayerTurn() && btn.textContent == ""){
                return "p1";
            }
            else if(!gameBoard.getPlayerTurn() && btn.textContent == ""){
                return "p2";
            }
        }
    }

    function fullBoardCheck(){
        let counter = 0;
        for(let i = 0; i < squareArray.length; i++){
            if(typeof squareArray[i][0] == 'undefined'){
                counter++;
                return false;
            }
        }
        return true;
    }

    function playerScored(playah){
        playah.addPoint();
        displayController.updateScore();
        gameBoard.pauseGame();
        btnNextRound.style.visibility = "visible";
    }

    function playerWin(){
        let pOne = playerArray[0];
        let pTwo = playerArray[1];
        let pOneScore = playerArray[0].getPlayerScore();
        let pTwoScore = playerArray[1].getPlayerScore();
        if(pOneScore == 3){
            headerWinner.textContent = `${pOne.nickname} Wins!`;
            headerWinner.style.visibility = "visible";
        }else if(pTwoScore == 3){
            headerWinner.textContent = `${pTwo.nickname} Wins!`;
            headerWinner.style.visibility = "visible";
        }

    }

    function winCheck(arr) {
        /*
        Function that checks for a win/draw.
        Need to check if three in row either X or O.

        Save the index of pressed button to another array.
        if array is length >= 3, check if elements is equal to inRowIndexes arrays.

        */
        let currentSymbol = arr.textContent; 
        let counter = 0;
       
        let pOneIndex = [];
        let pTwoIndex = [];

       for(let i = 0; i < squareArray.length; i++){
            if(currentSymbol == squareArray[i][0] && !gameBoard.fullBoardCheck()){
                counter++;
                if(getPlayerTurn()){
                    pOneIndex.push(squareArray.indexOf(squareArray[i]));
                    if(counter >= 3){
                        pOneIndex.sort();
                        for(let x = 0; x < inRowIndexes.length; x++){
                            let rowCounter = 0;
                            let indOne = inRowIndexes[x][0];
                            let indTwo = inRowIndexes[x][1];
                            let indThree = inRowIndexes[x][2];
                            for(let y = 0; y < pOneIndex.length; y++){
                                let pInd = pOneIndex[y];
                                if(pInd == indOne || pInd == indTwo || pInd == indThree){
                                    if(rowCounter != 3){
                                        rowCounter++;
                                    }
                                    if(rowCounter == 3){
                                        gameBoard.playerScored(playerArray[0]);
                                        gameBoard.playerWin();
                                    }
                                }
                            }
                        }


                    }
                }
                else if (!getPlayerTurn()){
                    pTwoIndex.push(squareArray.indexOf(squareArray[i]));
                    if(counter >= 3){
                        pTwoIndex.sort();
                        for(let x = 0; x < inRowIndexes.length; x++){
                            let rowCounter = 0;
                            let indOne = inRowIndexes[x][0];
                            let indTwo = inRowIndexes[x][1];
                            let indThree = inRowIndexes[x][2];
                            for(let y = 0; y < pTwoIndex.length; y++){
                                let pInd = pTwoIndex[y];
                                if(pInd == indOne || pInd == indTwo || pInd == indThree){
                                    if(rowCounter != 3){
                                        rowCounter++;
                                    }
                                    if(rowCounter == 3){
                                        gameBoard.playerScored(playerArray[1]);
                                        gameBoard.playerWin();
                                    }
                                }
                            }
                        }
                    }
                }
            }if(gameBoard.fullBoardCheck()){
                btnNextRound.style.visibility = "visible";
                gameBoard.pauseGame();
            }
            
       }

    }

    function newPlayer(playerForm) {
        pName = playerForm[0].value;
        pAge = parseInt(playerForm[1].value);
        if(typeof pName === 'string' && pName.length >= 3){
            if(typeof pAge === 'number' && String(pAge).length > 0){
                if(playerArray.length <= 2){
                    if(playerArray.length == 0){
                        let pOne = playerFactory(pName, pAge);
                        playerArray.push(pOne);
                    }
                    else if(playerArray.length == 1) {
                        let pTwo = playerFactory(pName, pAge);
                        playerArray.push(pTwo);
                    }
                }
            }
        }
    }

    return {getScore, switchTurn, getPlayerTurn,resetGame,pauseGame, winCheck,
         roundStartedCheck, btnCheck, getPlayerArray, newPlayer, startGame, nextRound, playerScored, playerWin, fullBoardCheck};
}) ();


const displayController = ( function () {
    
    /*
    const resetGameBoard = () => gameBoard.resetGame(),;
    const updateScore  = () => ;
    const drawSquare = () => ;
    const drawCircle = () => ;
    */


    function drawOnBtnClick(btn) {
        // Checks for player turn and button not already occupied.
        if(gameBoard.btnCheck(btn) == "p1"){
            btn.textContent = "X";
        }
        else if(gameBoard.btnCheck(btn) == "p2"){
            btn.textContent = "O";
        }
        
    
    }
    function displayPlayerForm(frm,btnCancel) {
        frm.style.visibility = "visible";
        btnCancel.style.visibility = "visible";
    }
    function hidePlayerForm(frm,btnCancel) {
        btnCancel.style.visibility = "hidden";
        frm.style.visibility = "hidden";
    }

    function addNewPlayer() {
        if(playerArray.length == 1){
            let playerOne = playerArray[0];
            playerOneScore.textContent = `${playerOne.nickname}, Score: 0`;
        }else if(playerArray.length == 2) {
            let playerTwo = playerArray[1];
            playerTwoScore.textContent = `${playerTwo.nickname}, Score: 0`;
        }
    }

    function clearPlayers(){
        playerArray = [];
        playerOneScore.textContent = "";
        playerTwoScore.textContent = "";
        btnStartGame.style.visibility = "hidden";
    }

    function ClearBoard(){
        for(let i = 0; i < gameSquareArray.length; i++){
            gameSquareArray[i].textContent = "";
        }
        btnNextRound.style.visibility = "hidden";
    }

    function updateScore(){
        let playerOne = playerArray[0];
        let playerTwo = playerArray[1];
        playerOneScore.textContent = `${playerOne.nickname}, Score: ${playerOne.getPlayerScore()}`;
        playerTwoScore.textContent = `${playerTwo.nickname}, Score: ${playerTwo.getPlayerScore()}`;

    }


    return {drawOnBtnClick, displayPlayerForm, hidePlayerForm, addNewPlayer, clearPlayers, ClearBoard,updateScore};
        

})();


function btnEvents() {
    for(let i = 0; i < gameSquareArray.length; i++){
        gameSquareArray[i].addEventListener("click", function(event){ 
            if(gameBoard.roundStartedCheck()){
                displayController.drawOnBtnClick(gameSquareArray[i]);
                squareArray[i][0] = gameSquareArray[i].textContent;
                gameBoard.winCheck(gameSquareArray[i]);
                gameBoard.switchTurn();
            }
    })};
    btnNewPlayer.addEventListener("click", (event) => displayController.displayPlayerForm(newPlayerForm, btnNewPlayerCancel));
    btnNewPlayerCancel.addEventListener("click", (event) => displayController.hidePlayerForm(newPlayerForm, btnNewPlayerCancel));
    btnStartGame.addEventListener("click", function(event){
        gameBoard.startGame();
    })
    btnClearPlayerList.addEventListener("click", function(event){
        event.preventDefault();
        displayController.clearPlayers();
    })

    btnNextRound.addEventListener("click", (event) => gameBoard.nextRound());
    btnResetGame.addEventListener("click", (event) => gameBoard.resetGame());
    
    // Clicking the add button in form.
    newPlayerFormSubmit.addEventListener("click", function(event){

        event.preventDefault();
        gameBoard.newPlayer(newPlayerForm);

        try {
            displayController.addNewPlayer();

        } catch (ReferenceError){
            console.log("error");
        }
    if(playerArray.length == 2){
        btnStartGame.style.visibility = "visible";
    }
})
};

btnEvents();