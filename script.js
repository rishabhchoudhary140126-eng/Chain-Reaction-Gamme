let turn = 0;  // if turn- even - blues turn, else red.
let currentPlayer = "blue";
let winner;
let gameover = false;
const cells = document.querySelectorAll(".cell");

let board = [];
//deefining capacity and other object elements
for(let row = 0; row < 6; row++){
    board[row] = [];
    for(let col = 0; col < 12; col++){
        board[row][col] = {
            owner : "none",
            count : 0,
            capacity : 0
        };
        if((row == 0 && col == 0) || (row == 0 && col == 11) || (row == 5 && col == 0) || (row == 5 && col == 11)){
            board[row][col].capacity = 2;
        }
        else if( row == 0 || row == 5 || col == 0 || col == 11 ){
            board[row][col].capacity = 3;
        }
        else{
            board[row][col].capacity = 4;
        }
        //console.log(row, col, board[row][col].count, board[row][col].capacity);
    }
}
//clicking mech,
cells.forEach(function(cell){
    cell.addEventListener("click", function(){
        

        const row = Number(cell.getAttribute("cell_row"));

        const col = Number(cell.getAttribute("cell_col"));
        //turn++;

        //defining current player
        if(turn%2==0){
            currentPlayer="blue";
        }
        else {
            currentPlayer="red";
        }

        //block move on enemy cell
        if(board[row][col].owner != "none" && board[row][col].owner != currentPlayer ){
            return;
        }


        if(turn<2){
            // first 2 move allow all cell, except opponents
            board[row][col].owner = currentPlayer;
            board[row][col].count = board[row][col].capacity-1;
            imgAllocation(cell, row, col);
            turn++;
        }

        else {
            //normal gameplay with explosion
            //block empty cells too:

            if(board[row][col].owner!=currentPlayer){
                return;
            }

            board[row][col].count++;
            if(board[row][col].count==board[row][col].capacity){
                //explosion happens, 
                explosion(cell , row , col);
                }
            else{
                imgAllocation(cell, row, col);
            }

            turn++;
        }
        console.log(turn, currentPlayer);
        checkWinner();
        setTimeout(function(){

                if(gameover==true){
                    alert(winner + "has won the game");
                    return;
                }

            }, 300);
        

    });

});


