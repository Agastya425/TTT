let boxes = document.querySelectorAll('.box');
let msgContainer = document.querySelector('.msg_container');
let newGameButton = document.getElementById('newgame');
let msg = document.getElementById('msg_text');
console.log(boxes);
let turnO = true;
let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],    
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
            box.disabled=true;
        } else {
            box.innerText = 'X';
            turnO = true;
            box.disabled=true;
        }   
        checkWinner();
   
     });
});

function checkWinner() {
    for(let pattern of winPattern) {
        let box1 = boxes[pattern[0]].innerText;
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText;

        if (box1 !== "" && box2 !== "" && box3 !== "" ){
            if (box1 === box2 && box2 === box3) {
                msgContainer.classList.remove('hide');
                msg.innerText=`Congratulations winner is ${box1}`;
                disableBoxes();
            }    
        }      
    }

}

function resetGame() {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        msgContainer.classList.add('hide');
    }); 
    turnO = true;
}

function disableBoxes(){
    boxes.forEach((box) => {
        box.disabled=true;
})
}
let resetButton = document.getElementById("reset");
resetButton.addEventListener('click', resetGame);

newGameButton.addEventListener('click', resetGame); 


