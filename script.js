let turn = 0;  // if turn- even - blues turn, else red.
let currentPlayer = "blue";
let winner;
let gameover = false;

let blue_score = 0;
let red_score = 0;

let time_remaining = 180;
let play_time_left = 15;


let paused = false;
const pause_btn = document.getElementById("pause_btn");
const pauseSound = new Audio("sounds/pause.mp3");
const resumeSound = new Audio("sounds/play.mp3");

const cells = document.querySelectorAll(".cell");
const h_player_turn = document.getElementById("h_player_turn");
const h_game_time = document.getElementById("h_game_time");
const h_player_timer = document.getElementById("h_player_timer");
const blue_score_head = document.getElementById("blue_score");
const red_score_head = document.getElementById("red_score");

const clickSound = new Audio("sounds/click.mp3");
const explosionSound = new Audio("sounds/explosion.mp3");
const winSound = new Audio("sounds/winner.mp3");


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
        if(paused) return;
        
        
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
        play_time_left = 15;

        if((turn+1)%2==0){     //for next plaers turn
            h_player_turn.innerText = "Blue player's turn";
        }
        else {
            h_player_turn.innerText = "Red player's turn";
        }

        if(turn<2){
            // first 2 move allow all cell, except opponents
            board[row][col].owner = currentPlayer;
            board[row][col].count = board[row][col].capacity-1;
            
            clickSound.currentTime = 0;
            clickSound.play();

            if(currentPlayer=="red"){
                red_score = red_score + board[row][col].count;
            }
            else if(currentPlayer=="blue"){
                blue_score=blue_score + board[row][col].count;
            }
            imgAllocation(cell, row, col);
            turn++;
            if(turn==1){
                gameTimer();
                playerTimer();
            }
            
        }

        else {
            //normal gameplay with explosion
            //block empty cells too:

            if(board[row][col].owner!=currentPlayer){
                return;
            }

            clickSound.currentTime = 0;
            clickSound.play();

            board[row][col].count++;
            if(board[row][col].count==board[row][col].capacity){
                //explosion happens, 
                if(currentPlayer=="blue"){
                    blue_score = board[row][col].count + blue_score;
                }
                else if (currentPlayer=="red"){
                    red_score = red_score + board[row][col].count;
                }
                imgAllocation(cell, row, col);
                explosionSound.currentTime=0;
                explosionSound.play();
                setTimeout(function(){

                    
                    explosion(cell , row , col);
                    checkWinner();

                    if(gameover){
                        winSound.currentTime = 0;
                        winSound.play();
                        h_player_turn.innerText = winner;
                        alert(winner);
                    }

                }, 600);

                
            }

            else{
                imgAllocation(cell, row, col);
                if(currentPlayer=="blue"){
                    blue_score++;
                }
                else if(currentPlayer=="red"){
                    red_score++;
                }
            }

            turn++;
            
        }
        console.log(turn, currentPlayer);
        checkWinner();
        setTimeout(function(){

                if(gameover==true){
                    winSound.currentTime = 0;
                    winSound.play();
                    h_player_turn.innerText = winner;
                    alert(winner);
                    return;
                }

            }, 300);
        
    
        blue_score_head.innerText = "Blue Score: " + blue_score;
        red_score_head.innerText = "Red Score: " + red_score;

    });

});



pause_btn.addEventListener("click", function(){

    if (paused == true) {
        paused = false;
    } 
    else {
        paused = true;
    }

    if(paused==true){
        pause_btn.innerText = "Resume";
        pauseSound.currentTime = 0;
        pauseSound.play();
    }
    else {
        pause_btn.innerText = "Pause";
        resumeSound.currentTime = 0;
        resumeSound.play();
    }

})