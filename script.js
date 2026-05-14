let turn = 0;

const cells = document.querySelectorAll(".cell");

let board = [];

for(let row = 0; row < 6; row++){

    board[row] = [];

    for(let col = 0; col < 12; col++){

        board[row][col] = {

            player : "none",
            count : 0

        };

    }

}

cells.forEach(function(cell){

    cell.addEventListener("click", function(){

        const row = Number(cell.getAttribute("cell_row"));

        const col = Number(cell.getAttribute("cell_col"));

        board[row][col].count++;
        console.log(row, col, board[row][col].count);

        if(board[row][col].count==0){
            //no img
            cell.innerHTML = "";
        }
        else if(board[row][col].count==1){
            //1 ball img
            cell.innerHTML = `<img src="imagegs/one-blue-ball.png" class="ball">`;
        }
        else if(board[row][col].count==2){
            //2 ball img
            cell.innerHTML = `<img src="imagegs/two-blue-ball.png" class="ball">`;
        }
        else if(board[row][col].count==3){
            //3 ball img
            cell.innerHTML = `<img src="imagegs/three-blue-ball.png" class="ball">`;
        }
        else if(board[row][col].count==4){
            //explosion and reset count to 0
            cell.innerHTML = `<img src="imagegs/explosion.gif" class="ball">`;
            setTimeout(function(){

                board[row][col].count = 0;

                cell.innerHTML = "";

            }, 600);
        }

    });

});

