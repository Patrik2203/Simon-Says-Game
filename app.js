let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");
let reset = document.querySelector(".reset-btn");

reset.addEventListener("click", resetGame);

if(started == false){
document.addEventListener("keypress", function (){  
    if(started == false){
        console.log("Yes");
        started = true;
        levelUp();
    }
});
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    }, 300);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level} pe hai tu`; 

    let rndInx = Math.floor(Math.random() * 4);
    let randColor  = btns[rndInx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else{
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
        }, 300);
        resetGame();
    }
}

function buttonPressed(){
    let btn = this;
    btnFlash(btn); //this, is fun. ko call karne wale btn ko refere karega;
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", buttonPressed);

}

function resetGame(){
    if(level != 0){
    h3.innerHTML = `Game Over! <br> Your Score is <b> ${level}</b> <br> Press Any key to Start`;}
    else{
        h3.innerText = "Press Any key to Start";
    }
    started = false;
        userSeq = [];
        gameSeq = [];
        level = 0;
}