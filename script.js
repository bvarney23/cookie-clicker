let gameState = {
    totalNumOfBrokenTackles: 0,
    numOfBrokenTackles: 0,
    intervalLoopId: undefined
}

let brokenTacklesTotalText = document.getElementById("broken-tackles-total")
let brkTacklesNum = document.getElementById("brk-tkls-num");

let chubbElement = document.getElementById("chubb");

function brokeTackleIncremeneter () {
    gameState.totalNumOfBrokenTackles = gameState.totalNumOfBrokenTackles + 1;
    brkTacklesNum.textContent = gameState.totalNumOfBrokenTackles;
}

chubbElement.addEventListener("click", brokeTackleIncremeneter)

let chubbBtnEle = document.getElementById("nick-button");

function chubbTacklesBroken () {
    if (gameState.totalNumOfBrokenTackles >= 5) {
        gameState.totalNumOfBrokenTackles -= 5;
        brkTacklesNum.textContent = gameState.totalNumOfBrokenTackles;
        gameState.numOfBrokenTackles += 1;
        brokenTacklesTotalText.textContent = gameState.numOfBrokenTackles
    }

}

chubbBtnEle.addEventListener("click", chubbTacklesBroken)

let chubbBtnEleTwo = document.getElementById("nick-button-2");

function chubbTacklesBrokenTwo () {
    if (gameState.totalNumOfBrokenTackles >= 10) {
        gameState.totalNumOfBrokenTackles -= 10;
        brkTacklesNum.textContent = gameState.totalNumOfBrokenTackles;
        gameState.numOfBrokenTackles += 10;
        brokenTacklesTotalText.textContent = gameState.numOfBrokenTackles
    }
}

chubbBtnEleTwo.addEventListener("click", chubbTacklesBrokenTwo)

let chubbBtnEleThree = document.getElementById("nick-button-3");

// let hideButtonThree = gameState.totalNumOfBrokenTackles

// if (hideButtonThree < 5) {
//     chubbBtnEleThree.style.display = "none";
// } else if (hideButtonThree >= 5) {
//     chubbBtnEleThree.style.display = "block";
// }


function chubbTacklesBrokenThree () {
    if (gameState.totalNumOfBrokenTackles >= 15) {
        gameState.totalNumOfBrokenTackles -= 15;
        brkTacklesNum.textContent = gameState.totalNumOfBrokenTackles;
        gameState.numOfBrokenTackles += 15;
        brokenTacklesTotalText.textContent = gameState.numOfBrokenTackles
    }
}

chubbBtnEleThree.addEventListener("click", chubbTacklesBrokenThree)


let startBtnEle = document.getElementById("start");

function startIncrementingTackles() {
    gameState.totalNumOfBrokenTackles += gameState.numOfBrokenTackles
    brkTacklesNum.textContent = gameState.totalNumOfBrokenTackles;
}

function incrementInterval () {
    gameState.intervalLoopId = setInterval(startIncrementingTackles, 1000);
}

startBtnEle.addEventListener("click", incrementInterval);

let stopBtnEle = document.getElementById("stop");

function stopIncrement () {
    clearInterval(gameState.intervalLoopId)
};

stopBtnEle.addEventListener("click", stopIncrement);