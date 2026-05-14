let turn = 0;  // if turn- even - blues turn, else red.
let no_of_blue_cell = 0;
let no_of_red_cell = 0;
let currentPlayer = "blue";

const cells = document.querySelectorAll(".cell");

let board = [];

function imgAllocation(cell, row, col){

    const count = board[row][col].count;
    const owner = board[row][col].owner;
    if(owner=="blue"){
        if(count == board[row][col].capacity){
            cell.innerHTML = `<img src="imagegs/explosion.gif" class="ball">`;
            setTimeout(function(){

                board[row][col].count = 0;

                cell.innerHTML = "";

            }, 600);
        }
        else if(count==1){
            cell.innerHTML = `<img src="imagegs/one-blue-ball.png" class="ball">`;
        }
        else if(count ==2){
            cell.innerHTML = `<img src="imagegs/two-blue-ball.png" class="ball">`;
        }
        else if(count==3){
            cell.innerHTML = `<img src="imagegs/three-blue-ball.png" class="ball">`;
        }
    }
    else{
        if(count == board[row][col].capacity){
            cell.innerHTML = `<img src="imagegs/explosion.gif" class="ball">`;
            setTimeout(function(){

                board[row][col].count = 0;

                cell.innerHTML = "";

            }, 600);
        }
        else if(count==1){
            cell.innerHTML = `<img src="imagegs/one-red-ball.png" class="ball">`;
        }
        else if(count ==2){
            cell.innerHTML = `<img src="imagegs/two-red-ball.png" class="ball">`;
        }
        else if(count==3){
            cell.innerHTML = `<img src="imagegs/three-red-ball.png" class="ball">`;
        }
    }

}


function explosion(cell , row, col){
    
    if(board[row][col].capacity==4){
        board[row+1][col].count++;
        board[row+1][col].owner = currentPlayer;
        let neighbourCell = document.querySelector(`[cell_row="${row+1}"][cell_col="${col}"]`)
        imgAllocation(neighbourCell, row+1, col);
        if(board[row+1][col].count==board[row+1][col].capacity){
            explosion(neighbourCell, row+1, col);
        }

        board[row-1][col].count++;
        board[row-1][col].owner = currentPlayer;
        neighbourCell = document.querySelector(`[cell_row="${row-1}"][cell_col="${col}"]`)
        imgAllocation(neighbourCell, row-1, col);
        if(board[row-1][col].count==board[row-1][col].capacity){
            explosion(neighbourCell, row-1, col);
        }

        board[row][col+1].count++;
        board[row][col+1].owner = currentPlayer;
        neighbourCell = document.querySelector(`[cell_row="${row}"][cell_col="${col+1}"]`)
        imgAllocation(neighbourCell, row, col+1);
        if(board[row][col+1].count==board[row][col+1].capacity){
            explosion(neighbourCell, row, col+1);
        }
        
        board[row][col-1].count++;
        board[row][col-1].owner = currentPlayer;
        neighbourCell = document.querySelector(`[cell_row="${row}"][cell_col="${col-1}"]`)
        imgAllocation(neighbourCell, row, col-1);
        if(board[row][col-1].count==board[row][col-1].capacity){
            explosion(neighbourCell, row, col-1);
        }
    }

    else if(board[row][col].capacity==3){
        if(row==0){
            board[row+1][col].count++;
            board[row+1][col].owner = currentPlayer;
            let neighbourCell = document.querySelector(`[cell_row="${row+1}"][cell_col="${col}"]`)
            imgAllocation(neighbourCell, row+1, col);
            if(board[row+1][col].count==board[row+1][col].capacity){
            explosion(neighbourCell, row+1, col);
            }

            board[row][col+1].count++;
            board[row][col+1].owner = currentPlayer;
            neighbourCell = document.querySelector(`[cell_row="${row}"][cell_col="${col+1}"]`)
            imgAllocation(neighbourCell, row, col+1);
            if(board[row][col+1].count==board[row][col+1].capacity){
            explosion(neighbourCell, row, col+1);
            }
        
            board[row][col-1].count++;
            board[row][col-1].owner = currentPlayer;
            neighbourCell = document.querySelector(`[cell_row="${row}"][cell_col="${col-1}"]`)
            imgAllocation(neighbourCell, row, col-1);
            if(board[row][col-1].count==board[row][col-1].capacity){
            explosion(neighbourCell, row, col-1);
            }
            
        }
        else if(row==5){
            board[row-1][col].count++;
            board[row-1][col].owner = currentPlayer;
            let neighbourCell = document.querySelector(`[cell_row="${row-1}"][cell_col="${col}"]`)
            imgAllocation(neighbourCell, row-1, col);
            if(board[row-1][col].count==board[row-1][col].capacity){
            explosion(neighbourCell, row-1, col);
            }

            board[row][col+1].count++;
            board[row][col+1].owner = currentPlayer;
            neighbourCell = document.querySelector(`[cell_row="${row}"][cell_col="${col+1}"]`)
            imgAllocation(neighbourCell, row, col+1);
            if(board[row][col+1].count==board[row][col+1].capacity){
            explosion(neighbourCell, row, col+1);
            }
        
            board[row][col-1].count++;
            board[row][col-1].owner = currentPlayer;
            neighbourCell = document.querySelector(`[cell_row="${row}"][cell_col="${col-1}"]`)
            imgAllocation(neighbourCell, row, col-1);
            if(board[row][col-1].count==board[row][col-1].capacity){
            explosion(neighbourCell, row, col-1);
            }
        }
        else if(col==0){
            board[row+1][col].count++;
            board[row+1][col].owner = currentPlayer;
            let neighbourCell = document.querySelector(`[cell_row="${row+1}"][cell_col="${col}"]`)
            imgAllocation(neighbourCell, row+1, col);
            if(board[row+1][col].count==board[row+1][col].capacity){
            explosion(neighbourCell, row+1, col);
            }

            board[row][col+1].count++;
            board[row][col+1].owner = currentPlayer;
            neighbourCell = document.querySelector(`[cell_row="${row}"][cell_col="${col+1}"]`)
            imgAllocation(neighbourCell, row, col+1);
            if(board[row][col+1].count==board[row][col+1].capacity){
            explosion(neighbourCell, row, col+1);
            }
        
            board[row-1][col].count++;
            board[row-1][col].owner = currentPlayer;
            neighbourCell = document.querySelector(`[cell_row="${row-1}"][cell_col="${col}"]`)
            imgAllocation(neighbourCell, row-1, col);
            if(board[row-1][col].count==board[row-1][col].capacity){
            explosion(neighbourCell, row-1, col);
            }
        }
        else{
            board[row+1][col].count++;
            board[row+1][col].owner = currentPlayer;
            let neighbourCell = document.querySelector(`[cell_row="${row+1}"][cell_col="${col}"]`)
            imgAllocation(neighbourCell, row+1, col);
            if(board[row+1][col].count==board[row+1][col].capacity){
            explosion(neighbourCell, row+1, col);
            }

            board[row][col-1].count++;
            board[row][col-1].owner = currentPlayer;
            neighbourCell = document.querySelector(`[cell_row="${row}"][cell_col="${col-1}"]`)
            imgAllocation(neighbourCell, row, col-1);
            if(board[row][col-1].count==board[row][col-1].capacity){
            explosion(neighbourCell, row, col-1);
            }
        
            board[row-1][col].count++;
            board[row-1][col].owner = currentPlayer;
            neighbourCell = document.querySelector(`[cell_row="${row-1}"][cell_col="${col}"]`)
            imgAllocation(neighbourCell, row-1, col);
            if(board[row-1][col].count==board[row-1][col].capacity){
            explosion(neighbourCell, row-1, col);
            }
        }


    }
    else if(board[row][col].capacity==2){
        if(row==0 && col ==0){
            board[row+1][col].count++;
            board[row+1][col].owner = currentPlayer;
            let neighbourCell = document.querySelector(`[cell_row="${row+1}"][cell_col="${col}"]`)
            imgAllocation(neighbourCell, row+1, col);

            board[row][col+1].count++;
            board[row][col+1].owner = currentPlayer;
            neighbourCell = document.querySelector(`[cell_row="${row}"][cell_col="${col+1}"]`)
            imgAllocation(neighbourCell, row, col+1);
        }
        else if(row==0 && col==11){
            board[row+1][col].count++;
            board[row+1][col].owner = currentPlayer;
            let neighbourCell = document.querySelector(`[cell_row="${row+1}"][cell_col="${col}"]`)
            imgAllocation(neighbourCell, row+1, col);

            board[row][col-1].count++;
            board[row][col-1].owner = currentPlayer;
            neighbourCell = document.querySelector(`[cell_row="${row}"][cell_col="${col-1}"]`)
            imgAllocation(neighbourCell, row, col-1);
        }
        else if(row==5 && col==0){
            board[row-1][col].count++;
            board[row-1][col].owner = currentPlayer;
            neighbourCell = document.querySelector(`[cell_row="${row-1}"][cell_col="${col}"]`)
            imgAllocation(neighbourCell, row-1, col);

            board[row][col+1].count++;
            board[row][col+1].owner = currentPlayer;
            neighbourCell = document.querySelector(`[cell_row="${row}"][cell_col="${col+1}"]`)
            imgAllocation(neighbourCell, row, col+1);
        }
        else if(row==5 && col==11){
            board[row-1][col].count++;
            board[row-1][col].owner = currentPlayer;
            neighbourCell = document.querySelector(`[cell_row="${row-1}"][cell_col="${col}"]`)
            imgAllocation(neighbourCell, row-1, col);

            board[row][col-1].count++;
            board[row][col-1].owner = currentPlayer;
            neighbourCell = document.querySelector(`[cell_row="${row}"][cell_col="${col-1}"]`)
            imgAllocation(neighbourCell, row, col-1);
        }
    }
    board[row][col].owner = "none";
    board[row][col].count = 0;
    if(board[row][col].count == 0){
        cell.innerHTML = "";
        return;
    }
    imgAllocation(cell, row, col);

}



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

    });

});