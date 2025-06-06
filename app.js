let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#Reset-button");
let newgamebutton=document.querySelector("#New-button");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
//player x,y
//turns-X,O
let turn1=true;//O
const win_patterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame = () =>{
    turn1=true;
    enable_boxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn1){
            box.innerText="O";
            turn1=false;
        }
        else{
            box.innerText="X";
            turn1=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disable_boxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable_boxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner= (winner) =>{
    msg.innerText=`Congratulations, Winner is ${winner}`;//backticks
    msgcontainer.classList.remove("hide");
    disable_boxes();
};
const checkwinner= () =>{
    for(pattern of win_patterns) {
        let p1val=boxes[pattern[0]].innerText;
        let p2val=boxes[pattern[1]].innerText;
        let p3val=boxes[pattern[2]].innerText;
        if(p1val!=""&&p2val!=""&&p3val!=""){
            if(p1val==p2val&&p2val==p3val){
                showwinner(p1val);
            }
        }
    }
    //Check for draw
    let isDraw = true;
    boxes.forEach((box) => {
        if (box.innerText === "") {
            isDraw = false;
        }
    });

    if (isDraw) {
        msg.innerText = "It's a Draw!";
        msgcontainer.classList.remove("hide");
        disable_boxes();
    }
};
newgamebutton.addEventListener("click",resetgame);
resetbutton.addEventListener("click",resetgame);