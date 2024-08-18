let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

let btns=["one","two","three","four"];

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        console.log("key pressed");
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function userFlash(btn){
    btn.classList.add("userFl");
    setTimeout(function(){
        btn.classList.remove("userFl");
    },300);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randInx=Math.floor(Math.random()*3);
    let randCol=btns[randInx];
    let randBtn=document.querySelector(`.${randCol}`);
    btnFlash(randBtn);

    gameSeq.push(randCol);
}

function checkAns(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        let score=level-1;
        h2.innerHTML=`Game Over! Press any key to Restart the game </br >Your Score is ${score}`;
        restart();
    }
}

function restart(){
    let body=document.querySelector("body");
    body.classList.add("red");
    setTimeout(function(){
        body.classList.remove("red");
    },500);
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}