let gameSeq = [];
let userSeq = [];

let h3 = document.querySelector("h3");

let btns = ["red", "green", "purple", "yellow"];

let started = false;
let level = 0;
let highScore = 0;


document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game started");
        started = true;
        levelUp();
    }
})

function levelUp() {
    level++;
    h3.innerText = `Level ${level}`;
    High();
    userSeq = [];
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx]
    let randBtn = document.querySelector(`.${randColor}`);
    
    gameSeq.push(randBtn.id);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200)
}

function userFlash(btn) {
    btn.classList.add("uFlash");
    setTimeout(function () {
        btn.classList.remove("uFlash");
    }, 200)
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    check(userSeq.length-1);
}

function check(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 250)
            
        }
    } else {
        h3.innerHTML = `Game Over! Your Score Was <b>${level}</b> <br> Press Any Key To Start Game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150)
        reset();
    }
}

function reset() {
    level = 0;
    gameSeq = [];
    userSeq = [];
    started = false;    
}

function High() {
    let Score = document.querySelector("span");
    if(highScore <= level){
        highScore = level;
        Score.innerText = `High Score : ${highScore}`;
    }else{
        Score.innerText = `High Score : ${highScore}`;
    }
}