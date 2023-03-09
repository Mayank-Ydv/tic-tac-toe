const boxes=document.querySelectorAll(".box");
const gameinfo=document.querySelector(".games");
const reset=document.querySelector(".btn");
const duck=document.getElementById("duck");


let currentplayer;
let gamegrid;
const winner=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];

function initGame(){
    currentplayer="X";
    gamegrid= ["","","","","","","","",""];
    boxes.forEach((box,index)=>{
        box.innerText="";
        boxes[index].style.pointerEvents="all";
        boxes[index].classList.remove("win");
        duck.style.opacity ="0";


    });
    reset.classList.remove("active");
    gameinfo.innerText=` Turn for ${currentplayer}`;



}
initGame();

function swapTurn() {
    if(currentplayer === "X") {
        currentplayer = "O";
    }
    else {
        currentplayer = "X";
    }
    //UI Update
    gameinfo.innerText = ` Turn for - ${currentplayer}`;

}

function checkGameOver() {
    let answer = "";

    winner.forEach((position) => {
        //all 3 boxes should be non-empty and exactly same in value
        if( (gamegrid[position[0]] !== "" || gamegrid[position[1]] !== "" || gamegrid[position[2]] !== "") 
            && (gamegrid[position[0]] === gamegrid[position[1]] ) && (gamegrid[position[1]] === gamegrid[position[2]])) {

                //check if winner is X
                if(gamegrid[position[0]] === "X") 
                    answer = "X";
                else {
                    answer = "O";
                } 
                    

                //disable pointer events
                boxes.forEach((box) => {
                    box.style.pointerEvents = "none";
                })

                //now we know X/O is a winner
                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");
                gameinfo.innerText=`winner is ${answer}`;
                duck.style.opacity="1";


                

            }
    });
}
function swapturn(){
    if(currentplayer==="X"){
        currentplayer="O";
    }else{
        currentplayer="X";
    }
    // updat UI
    gameinfo.innerText=`Turn for ${currentplayer}`;
}
function gameover(){

}

function handleclick(index){
    if(gamegrid[index]==""){
        boxes[index].innerHTML=currentplayer;
        gamegrid[index]=currentplayer;
        boxes[index].style.pointerEvents="none";
        swapturn();
        //check if win or not
        checkGameOver();

    }
}

boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleclick(index);
    })
});

reset.addEventListener("click",initGame );