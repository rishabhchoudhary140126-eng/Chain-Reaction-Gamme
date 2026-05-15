//seperate file for functions

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
        if(currentPlayer=="blue"){
            if(board[row+1][col].owner=="red" ){
                blue_score++;
            }
            if(board[row][col+1].owner=="red"){
                blue_score++;
            }
            if( board[row-1][col].owner=="red"){
                blue_score++;
            }
            if(board[row][col-1].owner=="red"){
                blue_score++;
            }
        }
        else if(currentPlayer=="red"){
            if(board[row+1][col].owner=="blue" ){
                red_score++;
            }
            if(board[row][col+1].owner=="blue"){
                red_score++;
            }
            if( board[row-1][col].owner=="blue"){
                red_score++;
            }
            if(board[row][col-1].owner=="blue"){
                red_score++;
            }
        }

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
            if(currentPlayer=="blue"){
                if(board[row+1][col].owner=="red" ){
                    blue_score++;
                }
                if(board[row][col+1].owner=="red"){
                    blue_score++;
                }
                // if( board[row-1][col].owner=="red"){
                //     blue_score++;
                // }
                if(board[row][col-1].owner=="red"){
                    blue_score++;
                }
            }
            else if(currentPlayer=="red"){
                if(board[row+1][col].owner=="blue" ){
                    red_score++;
                }
                if(board[row][col+1].owner=="blue"){
                    red_score++;
                }
                // if( board[row-1][col].owner=="blue"){
                //     red_score++;
                // }
                if(board[row][col-1].owner=="blue"){
                    red_score++;
                }
            }



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

            if(currentPlayer=="blue"){
                // if(board[row+1][col].owner=="red" ){
                //     blue_score++;
                // }
                if(board[row][col+1].owner=="red"){
                    blue_score++;
                }
                if( board[row-1][col].owner=="red"){
                    blue_score++;
                }
                if(board[row][col-1].owner=="red"){
                    blue_score++;
                }
            }
            else if(currentPlayer=="red"){
                // if(board[row+1][col].owner=="blue" ){
                //     red_score++;
                // }
                if(board[row][col+1].owner=="blue"){
                    red_score++;
                }
                if( board[row-1][col].owner=="blue"){
                    red_score++;
                }
                if(board[row][col-1].owner=="blue"){
                    red_score++;
                }
            }

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

            if(currentPlayer=="blue"){
                if(board[row+1][col].owner=="red" ){
                    blue_score++;
                }
                if(board[row][col+1].owner=="red"){
                    blue_score++;
                }
                if( board[row-1][col].owner=="red"){
                    blue_score++;
                }
                // if(board[row][col-1].owner=="red"){
                //     blue_score++;
                // }
            }
            else if(currentPlayer=="red"){
                if(board[row+1][col].owner=="blue" ){
                    red_score++;
                }
                if(board[row][col+1].owner=="blue"){
                    red_score++;
                }
                if( board[row-1][col].owner=="blue"){
                    red_score++;
                }
                // if(board[row][col-1].owner=="blue"){
                //     red_score++;
                // }
            }

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

            if(currentPlayer=="blue"){
                if(board[row+1][col].owner=="red" ){
                    blue_score++;
                }
                // if(board[row][col+1].owner=="red"){
                //     blue_score++;
                // }
                if( board[row-1][col].owner=="red"){
                    blue_score++;
                }
                if(board[row][col-1].owner=="red"){
                    blue_score++;
                }
            }
            else if(currentPlayer=="red"){
                if(board[row+1][col].owner=="blue" ){
                    red_score++;
                }
                // if(board[row][col+1].owner=="blue"){
                //     red_score++;
                // }
                if( board[row-1][col].owner=="blue"){
                    red_score++;
                }
                if(board[row][col-1].owner=="blue"){
                    red_score++;
                }
            }

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

            if(currentPlayer=="blue"){
                if(board[row+1][col].owner=="red" ){
                    blue_score++;
                }
                if(board[row][col+1].owner=="red"){
                    blue_score++;
                }
                // if( board[row-1][col].owner=="red"){
                //     blue_score++;
                // }
                // if(board[row][col-1].owner=="red"){
                //     blue_score++;
                // }
            }
            else if(currentPlayer=="red"){
                if(board[row+1][col].owner=="blue" ){
                    red_score++;
                }
                if(board[row][col+1].owner=="blue"){
                    red_score++;
                }
                // if( board[row-1][col].owner=="blue"){
                //     red_score++;
                // }
                // if(board[row][col-1].owner=="blue"){
                //     red_score++;
                // }
            }

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

            if(currentPlayer=="blue"){
                if(board[row+1][col].owner=="red" ){
                    blue_score++;
                }
                // if(board[row][col+1].owner=="red"){
                //     blue_score++;
                // }
                // if( board[row-1][col].owner=="red"){
                //     blue_score++;
                // }
                if(board[row][col-1].owner=="red"){
                    blue_score++;
                }
            }
            else if(currentPlayer=="red"){
                if(board[row+1][col].owner=="blue" ){
                    red_score++;
                }
                // if(board[row][col+1].owner=="blue"){
                //     red_score++;
                // }
                // if( board[row-1][col].owner=="blue"){
                //     red_score++;
                // }
                if(board[row][col-1].owner=="blue"){
                    red_score++;
                }
            }

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

            if(currentPlayer=="blue"){
                // if(board[row+1][col].owner=="red" ){
                //     blue_score++;
                // }
                if(board[row][col+1].owner=="red"){
                    blue_score++;
                }
                if( board[row-1][col].owner=="red"){
                    blue_score++;
                }
                // if(board[row][col-1].owner=="red"){
                //     blue_score++;
                // }
            }
            else if(currentPlayer=="red"){
                // if(board[row+1][col].owner=="blue" ){
                //     red_score++;
                // }
                if(board[row][col+1].owner=="blue"){
                    red_score++;
                }
                if( board[row-1][col].owner=="blue"){
                    red_score++;
                }
                // if(board[row][col-1].owner=="blue"){
                //     red_score++;
                // }
            }

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

            if(currentPlayer=="blue"){
                // if(board[row+1][col].owner=="red" ){
                //     blue_score++;
                // }
                // if(board[row][col+1].owner=="red"){
                //     blue_score++;
                // }
                if( board[row-1][col].owner=="red"){
                    blue_score++;
                }
                if(board[row][col-1].owner=="red"){
                    blue_score++;
                }
            }
            else if(currentPlayer=="red"){
                // if(board[row+1][col].owner=="blue" ){
                //     red_score++;
                // }
                // if(board[row][col+1].owner=="blue"){
                //     red_score++;
                // }
                if( board[row-1][col].owner=="blue"){
                    red_score++;
                }
                if(board[row][col-1].owner=="blue"){
                    red_score++;
                }
            }

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


function checkWinner(){
    let no_of_blue_cell = 0;
    let no_of_red_cell = 0;
    for(let row=0; row<6; row++){
        for(let col=0; col<12; col++){
            if(board[row][col].owner=="blue"){
                no_of_blue_cell++;
            }
            else if(board[row][col].owner=="red"){
                no_of_red_cell++;
            }           
        }
    }
    if(no_of_blue_cell==0 && turn>1){
        winner = "Red has won the game";
        gameover = true;
        return;
    }
    if(no_of_red_cell==0 && turn>1){
        winner = "Blue has won the game";
        gameover = true;
        return;
    }


    if(blue_score>red_score){
        winner = "Blue has won the game";
    }
    else if( blue_score<red_score){
        winner = "Red has won the game";
    }
    else if(blue_score == red_score){
        winner = "Match Draw!!";
    }
}

function gameTimer(){
    const timeInterval = setInterval(function(){
        time_remaining--;
        let min = Math.floor(time_remaining/60);
        let sec = Math.floor(time_remaining%60);
        h_game_time.innerText = "Time remaining: " + min + ":" + sec + " ";
        if(time_remaining==0 || gameover==true){
            clearInterval(timeInterval);
        }
    }, 1000)
}

function playerTimer(){
    const timeInterval = setInterval(function(){
        play_time_left--;
        h_player_timer.innerText = " Players time: " + play_time_left;
        if(play_time_left==0){
            turn++;
            play_time_left=15
            if((turn)%2==0){     //for next plaers turn
                h_player_turn.innerText = "Blue player's turn";
            }
            else {
                h_player_turn.innerText = "Red player's turn";
            }
        }
        if(gameover==true){
            clearInterval(timeInterval);
        }
    }, 1000)
}

function scoreCalculator(){
    
}