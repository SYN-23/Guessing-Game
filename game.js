'use strict';
let secretNumber=Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;
//console.log(secretNumber);

//Game over function creation
const gameOver=function(score){
    if(score<1){
        document.querySelector('.guess').textContent='Game Over';
        document.querySelector('.score').textContent=0;
    }
};

//High score set function creation
const higestNumber=function(score){
    if(score>highscore){
        highscore=score;
        document.querySelector('.highScore').textContent=highscore;
    }else{
        document.querySelector('.highScore').textContent=highscore;
    }
};


//document.querySelector('.final-Number').textContent=secretNumber;

//check button function
document.querySelector('#check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.number-Input').value);
   
    //game logic
    if(!guess){
        document.querySelector('.guess').textContent='Not a Number';
    }else if (guess>secretNumber){
        document.querySelector('.guess').textContent='Too High';
        score--;
        document.querySelector('.score').textContent=score;
        gameOver(score);
    }else if(guess<secretNumber){
        document.querySelector('.guess').textContent='Too Low';
        score--;
        document.querySelector('.score').textContent=score;
        gameOver(score);
    }else{
        document.querySelector('.guess').textContent='Correct Number'
        document.querySelector('.final-Number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        higestNumber(score);
        
    }
});

//reset button function
document.querySelector('#reset').addEventListener('click',function(){
      score = 20;
      secretNumber=Math.trunc(Math.random()*20)+1;
      
      
      document.querySelector('.number-Input').value="";
      document.querySelector('.score').textContent=score;
      document.querySelector('.guess').textContent='Start gueesing !!!';
      document.querySelector('.final-Number').textContent='?';
      document.querySelector('body').style.backgroundColor = '#c09ae7';


     // document.querySelector('.final-Number').textContent=secretNumber
 
});


