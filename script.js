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

    });

});

