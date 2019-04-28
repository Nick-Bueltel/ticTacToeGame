var board; 
//first turn is O turn
var piece = 'O'; 
//fill cell with blank space
var cell = ''; 
//start turns at 0
var turn = 0;
var winner = '';


const msgEl = document.getElementById('msg');
//reset page button
document.getElementById('reset').addEventListener('click', resetPage);

//reset page function and test
function resetPage(){
    location.reload(true);
    console.log("if you can read this after clicking the reset button, the function is not operating properly.")
}

//define cells as class .cell
const cells = document.querySelectorAll('.cell');

//draw array from cells 
function init(){
    board = Array.from(Array(9).keys());
    for(i in cells){
        cells[i].innerText = '';
        cells[i].addEventListener('click', handleClick);
    };
    //set turn as 1
    turn = 1; 
    // document.getElementById('msg').innerText.replace = `${piece}'s turn`;
};


//call the cell in question as arg
function handleClick(cell){
    //test to make sure cell is working correctly - displays div ID
    console.log(cell.target.id);
    
    //if the cell is empty replace with current piece variable, if not return statement. 
    if(document.getElementById(cell.target.id).innerText === ''){
    document.getElementById(cell.target.id).innerText = piece;
    } else {
        return; 
    } 
   
    //if the turn is even X is the current piece. otherwise the piece is O.
    if( turn % 2 === 0){
        piece = 'X'
    } else {
        piece = 'O'
    }
    
    //winCondition();
    //call turn change turn++
    turnChange();
};
function turnChange(){
    //console tests. 
    console.log(piece);
    console.log("turn" + turn);
    //increment turn. 
    turn++; 
     
};

// function winCondition(){
//     if(cells[1],cells[2],cells[3] === 'X'){
//         winner = 'X';
//     } else if (cells[1],cells[2],cells[3] === 'O'){
//         winner = 'O';
//     }
// console.log("winner" + winner);



//};



//start 
init();
