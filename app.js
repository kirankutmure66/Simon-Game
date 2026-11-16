let gameseq = [];
let userseq = [];

let btns=["red","yellow","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;
    }
    levalup();
}); 

function flashbutton(btn){
    btn.classList.add("flashbc");
    setTimeout(function(){
        btn.classList.remove("flashbc");},250);
}

function userflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");},500);
}
function levalup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randomindex = Math.floor(Math.random()*4);
    let randomcolor = btns[randomindex];
    let randbtn = document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    console.log(gameseq);
    flashbutton(randbtn);
}

function checkans(idx){
 
    if(gameseq[idx] == userseq[idx]){
        if(userseq.length == gameseq.length){
        setTimeout(levalup,1000);
        }
    }
    else{
        
        h2.innerText=`Game Over! Your score was ${level}. Press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnsall(){
    let btn = this;
    userflash(btn);

    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}
let btnpress = document.querySelectorAll(".btnn");
for(buttons of btnpress){
    buttons.addEventListener("click",btnsall);
}
function reset(){
    started = false;
    gameseq=[];
    userseq=[];
    level=0;
}




